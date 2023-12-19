import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const Developer = () => {
  const router = useRouter();
  const developerId = router.query.developerId;
  console.log(developerId);
  let content = 'Developer doesnot exist';

  if(developerId === 1){
    content = 'Yash';
  }
  if(developerId === 2){
    content = 'Vaibhav';
  }
  if(developerId === 3){
    content = 'Suresh';
  }

  return (
  <h1>{content}</h1>
  );
   
};

export default Developer;
