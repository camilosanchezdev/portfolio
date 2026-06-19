import { useEffect, useState } from 'react';

export function BlinkingCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      style={{
        display: 'inline-block',
        width: 3,
        height: '0.8em',
        background: '#E8720C',
        verticalAlign: 'middle',
        marginLeft: 6,
        borderRadius: 2,
        opacity: on ? 1 : 0,
        transition: 'opacity 0.05s',
      }}
    />
  );
}
