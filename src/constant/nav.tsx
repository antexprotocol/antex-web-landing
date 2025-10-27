import { medias } from '.'

export const headerNavConfig = [
  {
    displayName: 'Developers',
    link: 'https://docs.antxfi.com/antx/antx-v1-architecture',
  },
  {
    displayName: 'Community',
    // link: 'https://antex-1.gitbook.io/doc',
    children: [
      {
        displayName: 'X',
        link: medias.x,
      },
      {
        displayName: 'Discord',
        link: medias.discord,
      },
      {
        displayName: 'Telegram',
        link: medias.telegram,
      },
      {
        displayName: 'Medium',
        link: medias.medium,
      },
    ],
  },
  {
    displayName: 'Docs',
    link: medias.gitbook,
  },
  {
    displayName: (
      <svg
        width='16'
        height='15'
        viewBox='0 0 16 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12.4297 0.607147H14.8061L9.615 6.55545L15.7227 14.6511H10.941L7.19318 9.74211L2.90961 14.6511H0.530953L6.08299 8.28658L0.226562 0.608263H5.12997L8.51256 5.09438L12.4297 0.607147ZM11.5941 13.2255H12.9113L4.41053 1.95863H2.99815L11.5941 13.2255Z'
          fill='currentColor'
        />
      </svg>
    ),
    link: medias.x,
  },
]
