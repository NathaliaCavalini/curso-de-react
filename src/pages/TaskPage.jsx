import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <h1 className="text-2xl text-slate-100 font-bold mb-2">{title}</h1>
      <p className="text-slate-100">{description}</p>
    </div>
  );
}

export default TaskPage;
