import { Badge } from "@/components/ui/badge"

const JoinNewsLetter = () => {
  return (
    <div className="items-center justify-center flex gap-[5rem] sm:flex-col sm:gap-8 lg:flex-row">
        <div className="flex flex-col gap-10 ">
            <div className='gap-4 flex flex-col'>
                <h1 className="text-[3.5rem] font-semibold dark:text-white">Join our newsletter 🎉</h1>
                <h6 className='text-[1.8rem] font-normal dark:text-white/40 text-gray-400'>Read and share new perspectives on just about any topic. <br /> Everyone’s welcome.</h6>
            </div>

            <div className="flex flex-col space-y-7">
               <div className="flex space-x-6 items-center"><Badge className="bg-[#DBEAFE] hover:bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 text-[1.3rem] rounded-[50px] font-semibold">01</Badge> <h3 className="text-[1.6rem]">Get more discount</h3></div> 
               <div className="flex space-x-6 items-center"><Badge className="bg-[#FEE2E2] hover:bg-[#FEE2E2]  text-[#991B1B] px-4 py-2 text-[1.3rem] rounded-[50px] font-semibold">02</Badge> <h3 className="text-[1.6rem]">Get premium magazines</h3></div> 
            </div>

            <div className="relative flex items-center"><input type="Email" placeholder="example@gmail.com" className="p-6 border-solid border rounded-[30px] w-[40rem] border-[#e5e7eb] shadow-sm text-[1.3rem] dark:bg-transparent dark:border-gray-500 outline-[#4F46E5] selection:shadow-[#4F46E5] text-[#4B5563] " /> <button className="p-5 bg-[#4F46E5] flex items-center justify-center absolute left-[35rem] rounded-[60px] hover:bg-[#4338CA] duration-300 hover:shadow-lg" type="submit"><img src="../../../../src/assets/arrow.svg" alt="arrow" /></button></div>
        </div>

        <div><img src="../../../../src/assets/joinNews.svg" alt="join News image" /></div>
    </div>
  )
}

export default JoinNewsLetter

// import { useState } from "react";

// function EmailForm() {
//   const [email, setEmail] = useState(""); // État pour stocker l'email
//   const [error, setError] = useState(""); // État pour afficher les erreurs

//   // Fonction pour valider le format de l'email
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Fonction de soumission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Empêcher le rechargement de la page
//     if (validateEmail(email)) {
//       setError(""); // Effacer l'erreur si l'email est valide
//       console.log("Email valide, soumission en cours:", email);
//       // Ici, tu peux ajouter la logique pour soumettre l'email
//     } else {
//       setError("Veuillez entrer une adresse email valide.");
//     }
//   };

//   // Fonction pour gérer la touche Enter
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSubmit(e); // Soumettre quand Enter est pressé
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="relative flex items-center">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'email
//           onKeyPress={handleKeyPress} // Gestion de la touche Enter
//           placeholder="example@gmail.com"
//           className="p-6 border-solid border rounded-[30px] w-[40rem] border-[#e5e7eb] shadow-sm text-[1.3rem] dark:bg-transparent dark:border-gray-500 outline-[#4F46E5] selection:shadow-[#4F46E5] text-[#4B5563]"
//         />
//         <button
//           className="p-5 bg-[#4F46E5] flex items-center justify-center absolute left-[35rem] rounded-[60px] hover:bg-[#4338CA] duration-300 hover:shadow-lg"
//           type="submit"
//         >
//           <img src="../../../../src/assets/arrow.svg" alt="arrow" />
//         </button>
//       </div>
//       {error && <p className="text-red-500">{error}</p>} {/* Message d'erreur */}
//     </form>
//   );
// }

// export default EmailForm;
