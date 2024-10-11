import { useLoading } from "../components/LoadingContext";

export default function SwitchPage() {
	const { setIsLoading } = useLoading();

	const pageTransition = (pageName: string) => {
		setIsLoading(true);
		
		setTimeout(() => {
			window.location.href = "#/TransitTree/" + pageName + "/";
			if (pageName == '')
				window.location.href = "#/TransitTree/";

			setIsLoading(false);
		}, 500 + 100);
	}

	return pageTransition;
}
