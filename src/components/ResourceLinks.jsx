export default ResourceLinks;

function ResourceLinks({ phone, link }) {
  return (
    <aside className="resources-container">
      <a href={"tel:" + phone}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <g fill="currentColor">
            <path d="M12 2C6.49 2 2 6.49 2 12v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H4.07C4.56 7.06 7.93 4 12 4s7.44 3.06 7.93 7H18c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2v1c0 .55-.45 1-1 1h-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c1.65 0 3-1.35 3-3v-7c0-5.51-4.49-10-10-10"></path>
          </g>
        </svg>
      </a>
      <a href={link} target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24s 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <g fill="currentColor">
            <path d="M15.5 14c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-12C2.67 2 2 2.67 2 3.5v9c0 .83.67 1.5 1.5 1.5H5v2.96c0 .42.48.65.81.39L10 14z"></path>
            <path d="M20.5 8H19v4.5c0 1.93-1.57 3.5-3.5 3.5h-4.8l-1.51 1.21c.25.47.74.79 1.31.79H14l4.19 3.35c.33.26.81.03.81-.39V18h1.5c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5"></path>
          </g>
        </svg>
      </a>
    </aside>
  );
}
