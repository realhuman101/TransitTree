import { useLocation } from "react-router";
import { useLoading } from "../components/LoadingContext";

export default function SwitchPage() {
	const { setIsLoading } = useLoading();
	const location = useLocation().pathname;

	const pageTransition = (pageName: string) => {
		let path = "#/TransitTree/" + pageName + "/";
		if (pageName == '')
			path = "#/TransitTree/";

		if ("/" + pageName + "/" == location || (pageName == "" && location == "/"))
			return

		setIsLoading(true);
		
		setTimeout(() => {
			window.location.href = path;

			setIsLoading(false);
		}, 500 + 100);
	}

	return pageTransition;
}
