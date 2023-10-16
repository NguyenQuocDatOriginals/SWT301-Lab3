import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// Tạo một component News để hiển thị các tin tức theo các tab khác nhau
const News = () => {
  // Sử dụng hook useState để quản lý giá trị của tab hiện tại
  const [tabIndex, setTabIndex] = useState(0);

  // Trả về một đoạn JS để render ra giao diện
  return (
    <div className="container">
      {/* Sử dụng component Tabs để bao ngoài các tab header và tab panel */}
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        {/* Sử dụng component TabList để bao ngoài các tab header */}
        <TabList>
          {/* Sử dụng component Tab để định nghĩa các tab header */}
          <Tab>World</Tab>
          <Tab>Business</Tab>
          <Tab>Sports</Tab>
          <Tab>Technology</Tab>
          <Tab>Entertainment</Tab>
        </TabList>
        {/* Sử dụng component TabPanel để bao ngoài nội dung của từng tab panel */}
        {/* Nội dung của mỗi tab panel có thể là một component khác hoặc một đoạn HTML tùy ý */}
        <TabPanel>
          <h2>World news goes here.</h2>
        </TabPanel>
        <TabPanel>
          <h2>Business news goes here.</h2>
        </TabPanel>
        <TabPanel>
          <h2>Sports news goes here.</h2>
        </TabPanel>
        <TabPanel>
          <h2>Technology news goes here.</h2>
        </TabPanel>
        <TabPanel>
          <h2>Entertainment news goes here.</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default News;