import Link from 'next/link';

interface BurgeMenuProps {
  visible?: boolean;
  handleClose?: () => any;
}

export default function BurgerMenu({ visible, handleClose }: BurgeMenuProps) {
  const handleLinkClick = () => handleClose?.();
  return (
    <div
      aria-hidden={!visible}
      aria-expanded={visible}
      className={`duration-250 fixed inset-x-0 left-0 top-0 z-50 h-full overflow-y-auto bg-[rgba(1,10,5,0.75)] backdrop-blur-xl transition ${
        visible ? '' : 'translate-x-[calc(100vw)] opacity-0'
      }`}
    >
      <div className="container mb-[110px] mt-[43px] text-right text-sm font-normal">
        <button
          type="submit"
          className="tracking-[1.4px]"
          onClick={handleClose}
        >
          CLOSE
        </button>
      </div>

      <ul className="mb-[170px] block text-center ">
        <li
          className="mb-12 text-lg font-normal tracking-[1.8px]"
          onClick={handleLinkClick}
        >
          <Link href="#about">About</Link>
        </li>
        <li
          className="mb-12 text-lg font-normal tracking-[1.8px]"
          onClick={handleLinkClick}
        >
          <Link href="#services">Services</Link>
        </li>
        <li
          className="mb-12 text-lg font-normal tracking-[1.8px]"
          onClick={handleLinkClick}
        >
          <Link href="#career">Career</Link>
        </li>
        <li
          className="mb-12 text-lg font-normal tracking-[1.8px]"
          onClick={handleLinkClick}
        >
          <Link href="#gallery">Gallery</Link>
        </li>
        <li className="text-lg font-normal tracking-[1.8px]">
          <Link href="#contacts" onClick={handleLinkClick}>
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}
