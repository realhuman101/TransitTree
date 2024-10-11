import { useLoading } from "../components/LoadingContext";

export default function SwitchPage() {
	const { setIsLoading } = useLoading();

	const pageTransition = (pageName: string) => {
		setIsLoading(true);
		window.location.href = "#/TransitTree/" + pageName + "/";
		if (pageName == '')
			window.location.href = "#/TransitTree/";

		setTimeout(() => {
			setIsLoading(false);
		}, 1100);
	}

	return pageTransition;
}
