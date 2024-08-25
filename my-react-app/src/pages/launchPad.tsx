import React, { useState, useEffect } from "react";
import './launchPad.css';
import Breadcrumbs from "../components/customBreadCrumbs";
import {
  Table,
  Button,
  Input,
  Space,
  Modal,
  Form,
  message,
  Dropdown,
  Menu,
  Card,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import dataService, { DataType } from "../services/dataservice";
const { Search } = Input;

const LaunchPadPage: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<DataType | null>(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState<boolean>(false);
  const [recordToDelete, setRecordToDelete] = useState<DataType | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataService.getData();
      setData(result);
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    if (recordToDelete) {
      const result = await dataService.deleteRecord(recordToDelete.key);
      if (result.success) {
        setData(result.data!);
        message.success('Record deleted successfully');
      } else {
        message.error(result.message);
      }
      setIsDeleteModalVisible(false);
      setRecordToDelete(null);
    }
  };

  const handleEdit = (record: DataType) => {
    setCurrentRecord(record);
    form.setFieldsValue(record);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const handleAdd = () => {
    setCurrentRecord(null);
    form.resetFields();
    setIsEditing(false);
    setIsModalVisible(true);
  };

  const handleSave = async (values: { name: string }) => {
    if (isEditing) {
      const result = await dataService.updateRecord(
        currentRecord!.key,
        values.name
      );
      if (result.success) {
        setData(result.data!);
        message.success("Record edited successfully");
      } else {
        message.error(result.message);
        return;
      }
    } else {
      const result = await dataService.addRecord(values.name);
      if (result.success) {
        setData(result.data!);
        message.success("Record added successfully");
      } else {
        message.error(result.message);
        return;
      }
    }
    setIsModalVisible(false);
    form.resetFields();
  };

  const showDeleteModal = (record: DataType) => {
    setRecordToDelete(record);
    setIsDeleteModalVisible(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filteredValue: searchText ? [searchText] : null,
      onFilter: (value: string | number | boolean, record: DataType) => {
        return record.name
          .toLowerCase()
          .includes((value as string).toLowerCase());
      },
    },
    {
      title: "Creation Date",
      dataIndex: "creationDate",
      key: "creationDate",
    },
    {
      title: "Last Edited",
      dataIndex: "lastEdited",
      key: "lastEdited",
    },
    {
      title: "Edited By",
      dataIndex: "editedBy",
      key: "editedBy",
    },
    {
      title: "Action",
      key: "action",
      render: (_: undefined, record: DataType) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  key="1"
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(record)}
                >
                  Edit
                </Menu.Item>
                <Menu.Item
                  key="2"
                  icon={<DeleteOutlined />}
                  danger
                  onClick={() => showDeleteModal(record)}
                >
                  Delete
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <Button icon={<EllipsisOutlined />} />
          </Dropdown>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Breadcrumbs />
      <h1> Welcome to LaunchPad</h1>
      <div style={{ padding: 20 }}>
        <Space style={{ marginBottom: 16 }}>
          <Search
            placeholder="Search by name"
            onSearch={setSearchText}
            enterButton
          />
          <Button type="primary" onClick={handleAdd}>
            New
          </Button>
        </Space>
        <Card title="Launch Pad" className="table">
          <Table 
            columns={columns as never}
            dataSource={data}
            pagination={{ pageSize: 3 }}
          />
        </Card>
        <Modal
          title={isEditing ? "Edit Record" : "Add New Record"}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={currentRecord || { name: "" }}
            onFinish={handleSave}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input the name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {isEditing ? "Save Changes" : "Add Record"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Confirm Deletion"
          open={isDeleteModalVisible}
          onOk={handleDelete}
          onCancel={() => setIsDeleteModalVisible(false)}
          okText="Yes"
          cancelText="No"
        >
          <p>Are you sure you want to delete this record?</p>
        </Modal>
      </div>
    </>
  );
};

export default LaunchPadPage;
