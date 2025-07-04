import FeaturedBlog from '../components/FeaturedBlog.jsx';
import Timeline from '../components/Timeline.jsx';
import { blogs } from './blogs/all-blogs.jsx';

export default function ThreadPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#fff',
        color: '#000',
        fontFamily: 'sans-serif',
        padding: '120px 5vw',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          gap: '100px',
          height: '100%',
        }}
      >
        {/* Featured Blog */}
        <div
          style={{
            flex: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {blogs.length > 0 && <FeaturedBlog blog={blogs[0]} />}
        </div>

        {/* Timeline */}
        <div
          style={{
            flex: 2,
            overflowY: 'auto',
          }}
        >
          <Timeline />
        </div>
      </div>

      {/* Mobile layout override */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="flex-direction: row"] {
              flex-direction: column !important;
            }
            div[style*="flex: 3"] {
              width: 100%;
            }
            div[style*="flex: 2"] {
              width: 100%;
              margin-top: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}
