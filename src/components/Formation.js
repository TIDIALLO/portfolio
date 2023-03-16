function Formation() {
    return (
        <div className="bg-slate-900 text-white text-center ">
            <h1 className="pt-10 py-5 text-center font-extrabold text-5xl ">
                Formations
            </h1>
            <div className="grid grid-cols-3 mx-20 space-x-0  
                            py-8 justify-center col-start-3 gap-8">
                <div className="border-2 border-slate-800 bg-gradient-to-t from-slate-900 hover:from-slate-800 w-80  text-center">
                    <h3>Master en Transmission de Données et Sécurité de l'Information</h3>
                    Université Cheikh Anta Diop de Dakar , Département mathématiques informatique.
                    Option Mathématiques-Cryptographie-Sécurité

                </div>
                <div className="border-2 border-slate-800 bg-gradient-to-t from-slate-900 to-slate-800 hover:from-slate-800 w-80  text-center">
                <h3>Licence en Transmission de Données et Sécurité de l'Information</h3>
                    Université Cheikh Anta Diop de Dakar , Département mathématiques informatique.
                    Option Mathématiques-Cryptographie-Sécurité
                </div>
                <div className=" justify-center border-2 border-slate-800 bg-gradient-to-t from-slate-900 hover:from-slate-800 w-80  text-center">
                    Baccalaureat Scientifique
                </div>
            </div>
        </div>
    );
}

export default Formation;