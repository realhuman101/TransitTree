import { useLoading } from "./LoadingContext";


function Loading() {
  const { isLoading } = useLoading();

    return (
      <div id="loading" className={isLoading ? 'slide-down' : 'slide-up'}></div>
    )
}

export default Loading