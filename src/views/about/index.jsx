import React from "react";
import TypingCard from "@/components/TypingCard";

const About = () => {
  const cardContent = `
  欢迎关注作者博客:<a href="https:zhangyakun.com" target="_blank">Yakim Blog</a>
    <p>基于 React 和 Ant Design 实现。</p>
    <p>核心功能：用户登录/登出，动态路由，权限校验，用户管理等典型的业务模型，可以快速搭建企业级中后台。</p>
    
  `;
  return (
    <div className="app-container">
      <TypingCard title="关于作者" source={cardContent} />
    </div>
  );
};

export default About;
