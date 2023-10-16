import React from 'react'
// Nhập các component của React Materialize
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize'

// Tạo một component About để hiển thị một collapsible component
const About = () => {
  // Trả về một đoạn JS để render ra giao diện
  return (
    <div className='container'>
      <div className='about-card'>
        <h1>About us</h1>
        <p>We are a team of passionate soccer fans who love to share our opinions and insights about the beautiful game.</p>
        {/* Sử dụng component Collapsible của React Materialize */}
        <Collapsible accordion={false}>
          {/* Sử dụng component CollapsibleItem để tạo ra các mục có thể mở rộng */}
          <CollapsibleItem header='Nations' icon={<Icon>public</Icon>}>
            {/* Thêm nội dung cho mục Nations */}
            <p>We cover all the major soccer nations in the world, such as Brazil, Argentina, Germany, France, Spain, Italy, England, etc.</p>
            <p>We also follow the emerging soccer nations in Asia, Africa, and North America, such as Japan, South Korea, Iran, Nigeria, Senegal, Mexico, USA, etc.</p>
            <p>We provide you with the latest news, results, standings, and analysis of the national teams and their players.</p>
          </CollapsibleItem>
          <CollapsibleItem header='Daily news' icon={<Icon>today</Icon>}>
            {/* Thêm nội dung cho mục Daily news */}
            <p>We bring you the daily news from the world of soccer, including transfers, rumors, injuries, fixtures, and more.</p>
            <p>We also feature exclusive interviews, opinions, and stories from our expert writers and guest contributors.</p>
            <p>We keep you updated with the hottest topics and trends in the soccer community.</p>
          </CollapsibleItem>
        </Collapsible>
      </div>
    </div>
  )
}

// Xuất khẩu component About để có thể sử dụng ở nơi khác
export default About;