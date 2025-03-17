import cx from 'classnames'
import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="71"
        height="16"
        viewBox="0 0 71 16"
      >
        <g>
          <path
            fill="#FFFFFF"
            d="M23.21 4.87c.92.2 1.67.46 2.43.75.16.05.32.09.49.14.92-.09.92-.09 1.49-.24 1.05-.48 2.07-.62 3.68-.69 2.39-.04 4.09.07 5.9.68 1.66.7 2.36 1.46 2.31 2.39-.3.75-1.68 1.39-3.21 1.86-1.83.43-3.84.54-5.95.4-1.19-.13-1.99-.41-2.87-.73-.53-.2-.53-.2-1.35-.39-.12.05-.23.09-.36.14-.15.06-.3.12-.46.18-.15.06-.3.12-.46.18-.43.14-.43.14-1 .14v.21c-2.38.33-4.25.43-6.6.03-1.64-.34-2.91-.84-3.68-1.48-.57-.89-.36-1.7.91-2.49 2.31-1.02 5.41-1.48 8.73-.89zm-3.61 1.21c-.09.25-.19.5-.29.75-.58.02-1.16.05-1.75.07-.53.02-.53.02-.81.14-.01.18-.01.36.01.54 1.13.08 1.13.08 2.27.11.07.22.13.44.2.66.04.2.04.2.38.3.47 0 .94 0 1.42 0 .42-.32.3-.61.28-.96.26.01.53.01.8.02.89.01.89.01 1.46-.15.37-.18.37-.18.21-.42-.06-.06-.13-.13-.2-.19h-1.52v-.86h-1.7zm9.09 1.07c.09.18.19.35.28.53h6.82v-.64c-.67-.25-2.34-.13-3.23-.13h-3.87zm-19.09-2.29c.45.34.31.71.3 1.08v1.25c1.43-.31 2.44-.66 3.46-1.16.17-.07.34-.15.51-.23h.57c.07-.07.13-.14.2-.21.37-.22.37-.22 1-.3.93-.03 1.85-.04 2.78-.03-.36.41-.78.65-1.61.94-.98.36-1.89.72-2.78 1.11-.41.18-.84.34-1.29.51.96.5 1.94.95 3.13 1.39.38.17.76.35 1.14.53.26.09.52.18.78.27.64.26.64.26.64.69-3 .03-3 .03-3.98-.29-.42-.22-.77-.44-1.13-.67-.15-.06-.31-.11-.47-.18-.38-.14-.38-.14-.38-.35-.42-.06-.42-.06-.85-.11-.48-.17-.96-.35-1.42-.53-.29.44-.31.85-.3 1.31v.71c-.85.16-1.63.12-2.56.11-.62-.24-.41-.76-.45-1.09-.01-.1-.02-.2-.03-.3-.08-.74-.12-1.48-.13-2.23v-.29c0-.52.09-1.02.32-1.54 1-.12 1.55-.09 2.56 0z" />
          <path
            fill="#FFFFFF"
            d="M23.17 4.87c3.1.67 3.1.67 3.83 1.24.16.25.23.47.27.72.03.14.07.27.1.41-.06.73-.77 1.48-2.12 2.01-.82.25-.82.25-1.39.25v.21c-2.38.33-4.25.43-6.6.03-1.64-.34-2.91-.84-3.68-1.48-.57-.89-.36-1.7.91-2.49 2.27-1.01 5.42-1.5 8.69-.89zm-3.57 1.21c-.09.25-.19.5-.29.75-.58.02-1.16.05-1.75.07-.53.02-.53.02-.81.14-.01.18-.01.36.01.54 1.13.08 1.13.08 2.27.11.07.22.13.44.2.66.04.2.04.2.38.3.47 0 .94 0 1.42 0 .42-.32.3-.61.28-.96.26.01.53.01.8.02.89.01.89.01 1.46-.15.37-.18.37-.18.21-.42-.06-.06-.13-.13-.2-.19h-1.52v-.86h-1.7z" />
          <path
            fill="#FFFFFF"
            d="M67.64 4.97c1.68.49 2.46 1.2 2.79 1.96.05.37.05.37 0 .64-.97.36-3.91.22-5.21.22h-7.44c.37.44.37.44.85.86 1.75.32 3.21.41 5.11.21.76-.15 1.33-.32 1.99-.53.7.21.7.21 1.42.43-.15.39-.48.53-1.31.76-2.09.54-3.77.55-6.25.4-1.97-.19-3.05-.57-4.07-1.22-.91-.65-1.17-1.33-.66-2.04.53-.59 1.02-1.02 2.35-1.42.22-.08.44-.15.68-.23 2.2-.57 5.03-.5 7.33 0zm-6.01.9c-.86.24-.86.24-1.42.53v.43h7.39c-.31-.58-.51-.71-1.71-1.07-1.64-.28-2.73-.22-4.26.11z" />
          <path
            fill="#FFFFFF"
            d="M42.88 4.59c.45.34.31.71.3 1.08v1.26c1.43-.31 2.44-.66 3.46-1.16.17-.07.34-.15.51-.23h.57c.07-.07.13-.14.2-.21.37-.22.37-.22 1-.3.93-.03 1.85-.04 2.78-.03-.36.41-.78.65-1.61.94-.98.36-1.89.72-2.78 1.11-.41.18-.84.34-1.29.51.96.5 1.94.95 3.13 1.39.38.17.76.35 1.14.53.26.09.52.18.78.27.64.26.64.26.64.69-3 .03-3 .03-3.98-.29-.42-.22-.77-.44-1.13-.67-.15-.06-.31-.11-.47-.18-.38-.14-.38-.14-.38-.35-.42-.06-.42-.06-.85-.11-.48-.17-.96-.35-1.42-.53-.29.44-.31.85-.3 1.31v.71c-.85.16-1.63.12-2.56.11-.62-.24-.41-.76-.45-1.09-.01-.1-.02-.2-.03-.3-.08-.74-.12-1.48-.13-2.23v-.29c0-.52.09-1.02.32-1.54 1-.12 1.55-.09 2.56 0z" />
          <path
            fill="#FFFFFF"
            d="M13.91 4.59c-.15.52-.6.92-1.24 1.37-1.21.88-2.3 1.78-3.39 2.68-.19.16-.19.16-.39.32-.11.09-.23.19-.34.29-.28.23-.58.46-.88.68h-.57c-.54-.42-1.08-.84-1.62-1.26-.15-.12-.3-.23-.46-.36-.73-.57-1.45-1.14-2.16-1.71-.12-.09-.23-.19-.35-.29-.25-.23-.25-.23-.25-.44-.37-.04-.75-.07-1.14-.11.14-.47.59-.72 1.42-1.07h1.42c.44.37.44.37.64.61.68.79 1.77 1.54 2.77 2.27.64-.3 1.07-.59 1.47-.94.16-.15.16-.15.33-.3.11-.1.22-.2.34-.31.22-.2.44-.4.66-.6.14-.13.14-.13.29-.27.33-.26.67-.46 1.17-.68.93-.12 1.34-.09 2.27 0z" />
          <path
            fill="#FFFFFF"
            d="M55.95 4.48c.25.65.32 1.28.31 1.94v1.26c0 .22 0 .43 0 .65 0 .53 0 1.06-.02 1.59-.88.09-1.64.12-2.55.11-.47-.18-.35-.4-.38-.64-.01-.11-.02-.22-.03-.34-.01-.12-.02-.24-.04-.36-.01-.12-.02-.24-.03-.36-.25-2.75-.25-2.75.19-3.74.84-.16 1.63-.11 2.56-.1z" />
          <path
            fill="#FFFFFF"
            d="M59.36 5.33c0 .43-.5.61-1.14.96-.3.35-.32.61-.31.97v.34c-.02.29-.02.29.32.5.38-.25.75-.49 1.14-.75.23.03.23.03.48.05.72.06 1.4.08 2.14.09.28 0 .56.01.84.02.29 0 .58.01.87.01.44.01.44.01.89.01.72.01 1.44.02 2.16.04v.1c-2.15.04-4.31.07-6.53.11.37.44.37.44.85.86 1.75.32 3.21.41 5.11.21.76-.15 1.33-.32 1.99-.53.7.21.7.21 1.42.43-.15.39-.48.53-1.31.76-2.09.54-3.77.55-6.25.4-1.97-.19-3.05-.57-4.07-1.22-.91-.65-1.18-1.33-.66-2.04.53-.59 1.02-1.02 2.35-1.41.22-.08.44-.15.68-.23 2.2-.57 5.03-.5 7.33 0z" />
        </g>
      </svg>
    </Href>
  )
}

export default Logo
