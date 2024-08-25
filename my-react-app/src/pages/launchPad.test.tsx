import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LaunchPad from "./launchPad";
import dataService from "../services/dataservice";


jest.mock("../services/dataservice");

const mockData = [
  {
    key: "1",
    name: "Record 1",
    creationDate: "2023-01-01",
    lastEdited: "2023-01-02",
    editedBy: "User A",
  },
  {
    key: "2",
    name: "Record 2",
    creationDate: "2023-01-02",
    lastEdited: "2023-01-03",
    editedBy: "User B",
  },
];

beforeEach(() => {
  jest.clearAllMocks();
});

describe("LaunchPad Component", () => {
  test("renders correctly", async () => {
    (dataService.getData as jest.Mock).mockResolvedValue(mockData);

    render(<LaunchPad />);

    expect(await screen.findByText("Launch Pad")).toBeInTheDocument();
    expect(await screen.findByText("Record 1")).toBeInTheDocument();
    expect(await screen.findByText("Record 2")).toBeInTheDocument();
  });

  test("adds a new record", async () => {
    (dataService.getData as jest.Mock).mockResolvedValue(mockData);
    (dataService.addRecord as jest.Mock).mockResolvedValue({
      success: true,
      data: [
        ...mockData,
        {
          key: "3",
          name: "Record 3",
          creationDate: "2023-01-03",
          lastEdited: "2023-01-04",
          editedBy: "User C",
        },
      ],
    });

    render(<LaunchPad />);

    fireEvent.click(await screen.findByText("New"));
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Record 3" },
    });
    fireEvent.click(screen.getByText("Add Record"));

    expect(await screen.findByText("Record 3")).toBeInTheDocument();
  });

  test("edits a record", async () => {
    (dataService.getData as jest.Mock).mockResolvedValue(mockData);
    (dataService.updateRecord as jest.Mock).mockResolvedValue({
      success: true,
      data: [{ ...mockData[0], name: "Updated Record 1" }, mockData[1]],
    });

    render(<LaunchPad />);

    fireEvent.click((await screen.findAllByText("Edit"))[0]);
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Updated Record 1" },
    });
    fireEvent.click(screen.getByText("Save Changes"));

    expect(await screen.findByText("Updated Record 1")).toBeInTheDocument();
  });

  test("deletes a record", async () => {
    (dataService.getData as jest.Mock).mockResolvedValue(mockData);
    (dataService.deleteRecord as jest.Mock).mockResolvedValue({
      success: true,
      data: [mockData[1]],
    });

    render(<LaunchPad />);

    fireEvent.click((await screen.findAllByText("Delete"))[0]);
    fireEvent.click(screen.getByText("Yes"));

    await waitFor(() =>
      expect(screen.queryByText("Record 1")).not.toBeInTheDocument()
    );
  });
});
