export default function Timeline() {
  const contentList = [
    
    {
      id: 'blog-1',
      type: 'blog',
      title: 'At what cost ?',
      desc: 'No matter how far you run, no matter how big the wins, you eventually start craving the things you ignored. Peace. Health. A quiet day. Family. Balance.',
      date: 'Jul 3',
      url: 'https://sangwanhq.substack.com/p/at-what-cost',
    },
    
    {
      id: 'thread-1',
      type: 'thread',
      title: 'SEBI has banned US trading giant Jane Street.',
      desc: 'The firm is accused of manipulating index options on expiry days, making over ₹4,843 crore in illegal gains..... ',
      date: 'Jul 4',
      url: 'https://x.com/SangwanHQ/status/1941032409811898585',
    },
    
    //{
      //id: 'case-1',
      //type: 'case',
      //title: 'Building Asva Freight Engine',
      //desc: 'How we designed a modular quoting system for Indian logistics.',
      //date: 'Jul 2',
      //url: '/case-study/asva',
    //},
  ];

  const typeIcon = {
    thread: '𝕏',
    case: '↗',
    blog: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#FF681A" width="14" height="14"><path d="M0 0h448v62.8H0V0zm0 229.1h448v282.4L223.95 385.8 0 511.5V229.1zm0-114.5h448v62.8H0v-62.8z"/></svg>`,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {contentList.map((item) => (
        <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '13px', color: '#999' }}>{item.date}</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontWeight: '600', fontSize: '15px' }}>{item.title}</span>
            <span
              style={{
                fontSize: '15px',
                color: '#888',
                border: '1px solid #ddd',
                padding: '1px 6px',
                borderRadius: '4px',
                fontWeight: '500',
              }}
            >
              {item.type}
            </span>
          </div>

          <div style={{ fontSize: '14px', color: '#777' }}>{item.desc}</div>

          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '15px',
              marginTop: '4px',
              color: '#000',
              textDecoration: 'underline',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
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
    </div>
  );
}
