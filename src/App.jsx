const App = () => {
  return (
    <main className="min-h-dvh bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-800">
        Hello Renan Queiróz!
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border p-4 bg-slate-400 text-neutral-50 shadow-sm">
          Card A
        </div>   
        <div className="rounded-2xl border p-4 bg-slate-400 text-neutral-50 shadow-sm">
          Card B
        </div>   
        <div className="rounded-2xl border p-4 bg-slate-400 text-neutral-50 shadow-sm">
          Card C
        </div>   
      </div>



      <a href="#" className="inline-block px-4 py-2 rounded0lg border hover:bg-slate-100 focus:ring-2 focust:ring-blue-500">
        Link com foco
      </a>
    </main>
  );
}

export default App