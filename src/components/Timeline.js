import React from "react";
import { DiNetmagazine,DiCode } from "react-icons/di";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import se from "../images/se.png"
import sgsn from "../images/sgsn.png"
function Timeline() {
    return (
        <div>
            <div className=" bg-slate-900  justify-center px-auto " >
                <h1 className="mx-auto pl-3 px-3 py-5 font-extrabold text-5xl text-center text-white">
                    Expérience professionnelle.
                    </h1>
                </div>
            <div className="bg-gradient-to-tl  from-slate-900 bg-slate-900 py-5">
                <VerticalTimeline>
                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(15 23 42)' }}
                        date="Avril 2019 - Aujourd'hui"
                        iconStyle={{ background: 'rgb(15 23 42)', color: '#fff' }}
                        icon={<DiCode />}
                    >
                        <h1 className="vertical-timeline-element-title font-extrabold text-2xl text-white">Développeur Web</h1>
                        <h4 className="vertical-timeline-element-subtitle">Full Stack</h4>
                        <p>
                            <>
                                <li>Développer et maintenir des applications Web à l'aide de .Net, React.js et d'autres technologies connexes.</li>
                                <li>Collaborer avec des équipes interfonctionnelles, notamment des concepteurs, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.</li>
                                <li>Mise en œuvre d'un design réactif et garantie de la compatibilité entre navigateurs.</li>
                                <li>Maintenance et configuration des équipements</li>
                                <li>Participer aux revues de code et fournir des commentaires constructifs aux autres développeurs.. </li>
                                <li>Assurer la sécurité des appllications</li>
                            </>
                        </p>
                    </VerticalTimelineElement>
                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(15 23 42)' }}
                        date="Mai 2022 - present"
                        iconStyle={{ background: 'rgb(15 23 42)', color: '#fff' }}
                        icon={<DiNetmagazine />}
                    >
                        <h3 className="vertical-timeline-element-title">.Net Ingenier</h3>
                        <h4 className="vertical-timeline-element-subtitle">at Sensor6ty</h4>
                        <p>
                            <>
                                <li>Développement d'applications </li>
                                <li>Microsoft 365 </li>
                                <li>Azure & Azure Active Directory </li>
                                <li>Développement d'applications </li>
                                <li>Mise en place d'un bot intelligent</li>
                                <li>Créations des runbooks dans azure</li>
                                <li>
                                    Environnement technique:
                                    Power Apps, Power Virtual Agent, Power automate,
                                    Azure,Azure Active Directory PowerShell, Microsoft Teams, SharePoint, .Net
                                </li>
                            </>
                        </p>

                    </VerticalTimelineElement>
                
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(15, 23, 42)' }}
                        date="Sept 2020 - Déc 2020"
                        iconStyle={{ background: 'rgb(15, 23, 42)', color: '#fff' }}
                        icon={<img src={se} alt="" className="rounded-t-full" />}
                    >
                        <h3 className="vertical-timeline-element-title">Support IT at Sen'Eau</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dakar, Sénégal</h4>
                        <p className="text-2xl">
                            Assistant Informatique et superviseur équipe cockpit chez Sen'Eau
                            <>
                                <i>Assister le personnel </i>
                                <li>Réparation des postes de travail</li>
                                <li>Archivage des mails</li>
                                <li>Filtrage des incendies et rapports</li>
                                <li>Alerter les équipes sur le terrain</li>
                            </>
                        </p>

                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(15 23 42)' }}
                        date="Nov 2021 - Déc 2021"
                        iconStyle={{ background: 'rgb(15 23 42)', color: '#fff' }}
                        icon={<img src={sgsn} alt="" className="rounded-t-full" />}
                    >
                        <h3 className="vertical-timeline-element-title">Support ITat  Société Générale du Sénégal - SGSN</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dakar, Sénégal</h4>
                        <p>
                            <>
                                <li>Assistant informatique et logistique</li>
                                <li>Equipe helpdesk</li>
                                <li>Réparation des postes de travail</li>
                                <li>Maintenance et configuration des équipements</li>
                                <li>Support pour toutes les tâches système liées à l'infrastructure, maintenance informatique, mise en place,
                                    test et configuration utilisateurs sur les matériels et logiciels.
                                </li>
                                <li>
                                    Environnement technique : Microsoft Windows, Windows serveur 2012, Exchange
                                </li>
                            </>
                        </p>
                    </VerticalTimelineElement>
       {/*             <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(15, 23, 42)' }}
                        date="Sept 2020 - Déc 2020"
                        iconStyle={{ background: 'rgb(15, 23, 42)', color: '#fff' }}
                        icon={<img src={se} alt="" className="rounded-t-full" />}
                    >
                        <h3 className="vertical-timeline-element-title">Support IT at Sen'Eau</h3>
                        <h4 className="vertical-timeline-element-subtitle">Dakar, Sénégal</h4>
                        <p className="text-2xl">
                            Assistant Informatique et superviseur équipe cockpit chez Sen'Eau
                            <>
                                <i>Assister le personnel </i>
                                <li>Réparation des postes de travail</li>
                                <li>Archivage des mails</li>
                                <li>Filtrage des incendies et rapports</li>
                                <li>Alerter les équipes sur le terrain</li>
                            </>
                        </p>

                    </VerticalTimelineElement>
 
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(15, 23, 42)' }}
                        date="2019-2020"
                        iconStyle={{ background: 'rgb(15, 23, 42)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Projet de mémoire</h3>
                        <h4 className="vertical-timeline-element-subtitle">UCAD-FST-LACGAA</h4>
                        <p>
                            APPLICATION POUR LA FACTORISATION DE GRAND ENTIERS<br />
                            <u>Theme</u>
                            : Etude et Implémentation des algorithmes pour la factorisation de grands entiers<br />
                            <>
                                <li> Cryptographie avancée</li>
                                <li>Python  </li>
                            </>
                        </p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(30 41 59)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(15, 23, 42)' }}
                        date="2019-2020"
                        iconStyle={{ background: 'rgb(15, 23, 42)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Application de chiffrement: TdCrypt</h3>
                        <h4 className="vertical-timeline-element-subtitle">Projet interne</h4>
                        <p>
                            Création d'une Application de chiffrement et de signature numérique<br />
                            <>
                                <li>Chiffrement et Déchiffrement de données simples</li>
                                <li>Chiffrement et Déchiffrement de fichiers</li>
                                <li>Signatures électroniques de documents partagés</li>
                            </>
                        </p>

                    </VerticalTimelineElement> */}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Timeline;