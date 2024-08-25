import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Button, Layout } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import SiderMenu from "./components/siderBar";
import HeaderContent from "./components/headerContent";
import DynamicPage from "./components/dynamicPage";
import LoginPage from "./login/login";
import RegisterPage from "./login/register";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setIsLoggedIn(true);
    }

      // Add a resize event listener to handle window resizing
      const handleResize = () => {
        setCollapsed(window.innerWidth <= 768);
      };
  
      // Set up the event listener
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <Layout style={{ minHeight: "100vh" }}>
                <Header>
                  <HeaderContent />
                </Header>
                <Layout>
                  <Sider width={collapsed ? 80 : 256} >
                    <div
                      className={`siderMenu ${collapsed ? "collapsed" : ""}`}
                    >
                      <SiderMenu />
                      <Button
                        type="primary"
                        icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className="collapseButton"
                      />
                    </div>
                  </Sider>
                  <Layout style={{ padding: "0 24px 24px" }}>
                    <Content style={{ margin: "24px 0" }}>
                      <Routes>
                        <Route
                          path="/"
                          element={<Navigate to="/page/home" />}
                        />
                        <Route
                          path="/page/:optionId"
                          element={<DynamicPage />}
                        />
                      </Routes>
                    </Content>
                  </Layout>
                </Layout>
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
