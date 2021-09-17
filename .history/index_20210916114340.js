function App() {
  
  const [text, setText] = React.useState("");
  
  
  return(
    <div className="text-center px-4">
      <h1 className="p-4">My Markdown Previewer</h1>
      <textarea className="textarea" name="textarea" id="editor" rows="10" value={text}></textarea>
      <h3 className="mt-3">Output</h3>
    </div>
  );
}



ReactDOM.render(<App/>, document.getElementById('root'));