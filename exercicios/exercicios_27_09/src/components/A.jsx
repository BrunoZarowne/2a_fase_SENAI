import { useState } from "react";

 export default function A() {
   const [formState, setFormState] = useState({
     title: "",
     subtitle: "",
     author: "",
     date: "",
     pages: "",
     summary: "",
   });

   const [books, setBooks] = useState([]);

   const handleSubmit = (e) => {
     e.preventDefault();

     setBooks([...books, { id: books.length + 1, ...formState }]);
   };

   return (
     <main className="flex min-h-screen p-8">
       <form
         className="w-full flex flex-col items-center justify-center gap-4"
         action="submit"
         onSubmit={handleSubmit}
       >
         <input
           name="title"
           type="text"
           placeholder="Titulo"
           required
           value={formState.title}
           onChange={(e) =>
             setFormState({ ...formState, title: e.target.value })
           }
         />
         <input
           name="subtitle"
           type="text"
           placeholder="Subtitulo"
           required
           value={formState.subtitle}
           onChange={(e) =>
             setFormState({ ...formState, subtitle: e.target.value })
           }
         />
         <input
           name="author"
           type="text"
           placeholder="Autor"
           required
           value={formState.author}
           onChange={(e) =>
             setFormState({ ...formState, author: e.target.value })
           }
         />
         <input
           name="date"
           type="text"
           placeholder="Data de lançamento"
           required
           value={formState.date}
           onChange={(e) => setFormState({ ...formState, date: e.target.value })}
         />
         <input
           name="pages"
           type="text"
           placeholder="Numero de Paginas"
           required
           value={formState.pages}
           onChange={(e) =>
             setFormState({ ...formState, pages: e.target.value })
           }
         />
         <input
           name="summary"
           type="text"
           placeholder="Resumo"
           required
           value={formState.summary}
           onChange={(e) =>
             setFormState({ ...formState, summary: e.target.value })
           }
         />
         <button type="submit">Cadastrar livro</button>
       </form>

       {books && <pre>{JSON.stringify(books, null, 2)}</pre>}
     </main>
   );
 }