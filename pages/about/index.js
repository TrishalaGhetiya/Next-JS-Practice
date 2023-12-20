import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/about/1">Senior Developer</Link>
        </li>
        <li>
          <Link href="/about/2">Backend Developer</Link>
        </li>
        <li>
          <Link href="/about/3">Frontend Developer</Link>
        </li>
      </ul>
    </>
  );
};

export default AboutUs;
