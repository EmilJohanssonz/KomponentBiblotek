interface FooterProps {
  company: string;
}

const Footer: React.FC<FooterProps> = ({ company }) => {
  return (
    <footer className="mt-5 text-center p-4 text-gray-600 dark:text-gray-3">
      © {new Date().getFullYear()} {company}. All rights reserved.
    </footer>
  );
};

export default Footer;
