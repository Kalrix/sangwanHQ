import { useState } from 'react';

export default function Timeline() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const contentList = [
    {
      id: 'thread-3',
      type: 'thread',
      title: 'UAE just made a bold move',
      desc: 'Indians can now get a 10-year #GoldenVisa by investing just ₹23 lakh. No need to buy property. No million-dollar net worth.',
      date: 'Jul 7',
      url: 'https://x.com/SangwanHQ/status/1942134687754760244',
    },
    {
      id: 'thread-2',
      type: 'thread',
      title: 'Thinking of starting a deep-tech company in India?',
      desc: 'The government just launched the RDI scheme—and it could quietly change how innovation is funded in this country.',
      date: 'Jul 6',
      url: 'https://x.com/SangwanHQ/status/1941725024194580739',
    },
    {
      id: 'thread-1',
      type: 'thread',
      title: 'SEBI has banned US trading giant Jane Street.',
      desc: 'The firm is accused of manipulating index options on expiry days, making over ₹4,843 crore in illegal gains.',
      date: 'Jul 4',
      url: 'https://x.com/SangwanHQ/status/1941032409811898585',
    },
    {
      id: 'blog-1',
      type: 'blog',
      title: 'At what cost?',
      desc: 'No matter how far you run, no matter how big the wins, you eventually start craving the things you ignored. Peace. Health. A quiet day. Family. Balance.',
      date: 'Jul 3',
      url: 'https://sangwanhq.substack.com/p/at-what-cost',
    },
  ];

  const typeIcon = {
    thread: '𝕏',
    case: '↗',
    blog: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#FF681A" width="14" height="14"><path d="M0 0h448v62.8H0V0zm0 229.1h448v282.4L223.95 385.8 0 511.5V229.1zm0-114.5h448v62.8H0v-62.8z"/></svg>`,
  };

  const totalPages = Math.ceil(contentList.length / itemsPerPage);
  const startIdx = (page - 1) * itemsPerPage;
  const currentItems = contentList.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Section Title */}
      <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '4px' }}>
        Read My Thoughts
      </h2>

      {/* Timeline Items */}
      {currentItems.map((item) => (
        <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '13px', color: '#999' }}>{item.date}</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: '600', fontSize: '15px' }}>{item.title}</span>
            <span
              style={{
                fontSize: '13px',
                color: '#555',
                border: '1px solid #ddd',
                padding: '1px 6px',
                borderRadius: '4px',
                fontWeight: '500',
              }}
            >
              {item.type === 'thread'
                ? '𝕏-thread'
                : item.type === 'blog'
                ? 'Blog'
                : 'Case Study'}
            </span>
          </div>

          <div style={{ fontSize: '14px', color: '#777' }}>{item.desc}</div>

          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '15px',
              marginTop: '2px',
              color: '#000',
              textDecoration: 'underline',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Read on{' '}
            <span
              dangerouslySetInnerHTML={{
                __html: typeIcon[item.type],
              }}
            />
          </a>
        </div>
      ))}

      {/* Pagination Controls */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            style={{
              fontSize: '13px',
              padding: '4px 10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#fff',
              cursor: 'pointer',
            }}
          >
            ← Prev
          </button>
        )}

        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            style={{
              fontSize: '13px',
              padding: '4px 10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#fff',
              cursor: 'pointer',
            }}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
