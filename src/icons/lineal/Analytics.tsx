import IconProps from '@/types/icon';

const Analytics = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 512 427.5"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-inject icon-svg ${className || 'icon-svg-sm text-primary me-4'}`}
    >
      <path className="lineal-fill" d="M186.9 353.4h138.3V413H186.9z" />
      <path
        className="lineal-stroke"
        d="M460.2 0H51.8C23.2 0 0 23.2 0 51.8v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.6h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-45.1c0-8-6.5-14.5-14.5-14.5H51.8C39.2 339 29 328.8 29 316.2V51.8C29 39.2 39.2 29 51.8 29h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-45.9c-8-.2-14.6 6.1-14.8 14.1-.2 8 6.1 14.6 14.1 14.8h46.7c28.6 0 51.7-23.2 51.8-51.8V51.8C512 23.2 488.8 0 460.2 0zM201.3 398.5v-30.6h109.4v30.6H201.3z"
      />
      <path
        className="lineal-fill"
        d="M218.2 291.3h-75.6v-90.6c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v90.6zm75.6 0h-75.6V155.4c0-20.9 16.9-37.8 37.8-37.8s37.8 16.9 37.8 37.8v135.9z"
      />
      <path
        className="lineal-stroke"
        d="M369.4 215.4c8 0 14.4-6.4 14.5-14.4v-91c0-28.9-23.5-52.2-52.3-52.2-28.3 0-51.4 22.6-52.2 50.8-25.8-12.9-57.1-2.5-70.1 23.3-3.4 6.9-5.3 14.4-5.5 22.1-25.8-12.9-57.2-2.5-70.1 23.3-3.6 7.3-5.5 15.3-5.5 23.4v90.6c0 8 6.5 14.5 14.5 14.5h226.7c8 .2 14.6-6.1 14.8-14.1.2-8-6.1-14.6-14.1-14.8h-61.9V110c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v91c.1 8 6.6 14.4 14.6 14.4zm-212.3-14.7c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v76.1h-46.6v-76.1zm75.6 0v-45.4c0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3v121.5h-46.6v-76.1z"
      />
    </svg>
  );
};

export default Analytics;
