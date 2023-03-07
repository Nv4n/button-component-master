import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";

function App() {
	return (
		<div className="App">
			<div>
				<ButtonContainer labelText="<Button/>"></ButtonContainer>
			</div>
			<div>
				<ButtonContainer
					variant="outline"
					color="primary"
					labelText="<Button variant=”outline” />"
				></ButtonContainer>
			</div>
			<div>
				<ButtonContainer
					variant="text"
					color="primary"
					labelText="<Button variant=”text” />"
				></ButtonContainer>
			</div>
			<div>
				<ButtonContainer
					color="primary"
					disableShadow
					labelText={"<Button disableShadow />"}
				></ButtonContainer>
			</div>
			<div>
				<ButtonContainer
					disabled
					labelText={"<Button disabled />"}
				></ButtonContainer>
				<ButtonContainer
					variant="text"
					disabled
					labelText={"<Button variant=”text” disabled />"}
				></ButtonContainer>
			</div>
			<div>
				<ButtonContainer
					startIcon="local_grocery_store"
					color="primary"
					labelText={"<Button startIcon=”local_grocery_store” />"}
				></ButtonContainer>
				<ButtonContainer
					endIcon="local_grocery_store"
					color="primary"
					labelText={"<Button endIcon=”local_grocery_store” />"}
				></ButtonContainer>
			</div>
			<div>
				<ButtonContainer
					size="sm"
					color="primary"
					labelText={"<Button size=”sm” />"}
				></ButtonContainer>
				<ButtonContainer
					size="md"
					color="primary"
					labelText={"<Button size=”sm” />"}
				></ButtonContainer>
				<ButtonContainer
					size="lg"
					color="primary"
					labelText={"<Button size=”lg” />"}
				></ButtonContainer>
			</div>

			<div>
				<ButtonContainer
					color="default"
					labelText={"<Button color=”default” />"}
				></ButtonContainer>
				<ButtonContainer
					color="primary"
					labelText={"<Button color=”primary” />"}
				></ButtonContainer>
				<ButtonContainer
					color="secondary"
					labelText={"<Button color=”secondary” />"}
				></ButtonContainer>
				<ButtonContainer
					color="danger"
					labelText={"<Button color=”danger” />"}
				></ButtonContainer>
			</div>
		</div>
	);
}

export default App;
