import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'antd';


class ContentData extends React.Component {

  render () {
    return (
      <div class="container">
        <header class="site-header">
          <h1>Responsive Web Design</h1>
          <h1>Media Queries</h1>
        </header>
        <div class="content">
          <div class="posts">
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ipsum reiciendis quae, quos blanditiis, rerum neque distinctio adipisci laborum laudantium sed mollitia rem in possimus quas id deleniti numquam quibusdam.</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci error reprehenderit qui incidunt ea? Culpa, tenetur quia. Est, magnam. Dolorum atque asperiores iure aliquid illo laudantium harum eveniet reprehenderit.</p>
            </article>
          </div>
          <aside class="site-sidebar">
             <ul>
               <li><a href="#">Recent Posts</a></li>
               <li><a href="#">Recent Posts</a></li>
               <li><a href="#">Recent Posts</a></li>
             </ul>
          </aside>
        </div>
        <footer class="site-footer">
          <p>&copy; Copyright information 2017.</p>
        </footer>
      </div>
    );
  }
}

export default ContentData;
