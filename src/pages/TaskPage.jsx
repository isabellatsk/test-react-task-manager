import { ChevronLeftIcon } from "lucide-react"; //icons de lucide-react
import { useNavigate, useSearchParams } from "react-router-dom"; //navegação e parâmetros
import Title from "../components/Title";

// componente principal
function TaskPage() {
  const navigate = useNavigate(); //  função do react-router-dom para navegar para outra rota via código
  const [searchParams] = useSearchParams(); //hook do react-router-dom para pegar os parâmetros da URL
  const title = searchParams.get("title"); //recebe o valor do parâmetro title
  const description = searchParams.get("description"); //recebe o valor do parâmetro description

  //return do componente TaskPage
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">Tarefa: {title}</h2>
          <p className="text-slate-600">Descrição: {description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
