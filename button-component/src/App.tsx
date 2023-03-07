import ButtonContainer from "./components/ButtonContainer";

function App() {
	const buttonRowStyles = "flex flex-wrap gap-16";
	return (
		<div className="App px-2 py-1">
			<h1 className="font-['Poppins'] text-2xl font-medium">Buttons</h1>
			<div className={buttonRowStyles}>
				<ButtonContainer labelText="<Button/>"></ButtonContainer>
			</div>
			<div className={buttonRowStyles}>
				<ButtonContainer
					variant="outline"
					color="primary"
					labelText="<Button variant=”outline” />"
				></ButtonContainer>
			</div>
			<div className={buttonRowStyles}>
				<ButtonContainer
					variant="text"
					color="primary"
					labelText="<Button variant=”text” />"
				></ButtonContainer>
			</div>
			<div className={buttonRowStyles}>
				<ButtonContainer
					color="primary"
					disableShadow
					labelText={"<Button disableShadow />"}
				></ButtonContainer>
			</div>
			<div className={buttonRowStyles}>
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
			<div className={buttonRowStyles}>
				<ButtonContainer
					startIcon="local_grocery_store"
					color="primary"
					labelText={"<Button startIcon=”local_grocery_store” />"}
				></ButtonContainer>
				<ButtonContainer
					startIcon="local_grocery_store"
					color="secondary"
					variant="text"
					labelText={
						// eslint-disable-next-line quotes
						'<Button startIcon="local_grocery_store" variant="text" color="secondary" />'
					}
				></ButtonContainer>
				<ButtonContainer
					startIcon="local_grocery_store"
					color="danger"
					variant="outline"
					labelText={
						// eslint-disable-next-line quotes
						'<Button startIcon="local_grocery_store" variant="outline" color="danger" />'
					}
				></ButtonContainer>
			</div>
			<div className={buttonRowStyles}>
				<ButtonContainer
					endIcon="local_grocery_store"
					color="primary"
					labelText={"<Button endIcon=”local_grocery_store” />"}
				></ButtonContainer>
				<ButtonContainer
					endIcon="local_grocery_store"
					color="secondary"
					variant="text"
					labelText={
						// eslint-disable-next-line quotes
						'<Button endIcon=”local_grocery_store” variant="text" color="secondary" />'
					}
				></ButtonContainer>
				<ButtonContainer
					endIcon="local_grocery_store"
					color="danger"
					variant="outline"
					labelText={
						// eslint-disable-next-line quotes
						'<Button endIcon=”local_grocery_store” variant="outline" color="danger"/>'
					}
				></ButtonContainer>
			</div>
			<div className={buttonRowStyles}>
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
			<div className={buttonRowStyles}>
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
			<footer className="mx-1 my-4">
				<span className="font-['Montserrat'] text-sm text-[#A9A9A9]">
					created by{" "}
					<a
						className="font-black underline"
						href="https://github.com/Nv4n/"
					>
						Nv4n
					</a>{" "}
					- devChallenges.io
				</span>
			</footer>
		</div>
	);
}

export default App;
