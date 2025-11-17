import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

// Single-file page component — Remplace le contenu par un vrai tutoriel étape par étape
export default function GanttProjectTuto() {
    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <header className="max-w-6xl mx-auto mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="rounded-lg bg-gradient-to-r from-rose-400 to-indigo-500 p-2 text-white font-bold">GanttTuto</div>
                        <h1 className="text-2xl font-semibold">Tuto GanttProject</h1>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
                <aside className="col-span-3">
                    <div className="sticky top-6">
                        <Card>
                            <CardHeader className="font-semibold">Sommaire</CardHeader>
                            <CardContent>
                                <nav className="flex flex-col gap-2 text-sm">
                                    <a href="#" className="hover:underline">Installation</a>
                                    <a href="#create-project" className="hover:underline">Créer un projet</a>
                                    <a href="#calendar" className="hover:underline">Calendrier & Jours fériés</a>
                                    <a href="#resources" className="hover:underline">Ressources</a>
                                </nav>
                            </CardContent>
                        </Card>
                    </div>
                </aside>


                <section className="col-span-9">
                    <article id="install" className="mt-6 mb-6">
                        <h3 className="text-lg font-semibold">1 — Installation</h3>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <Card>
                                <CardHeader>Téléchargement</CardHeader>
                                <CardContent>
                                    <ol className="list-decimal pl-5 text-sm space-y-2">
                                        <li>Rendez-vous sur <em>https://ganttproject.org</em>.</li>
                                        <li>Téléchargez l'installateur pour Windows / macOS / Linux.</li>
                                        <li>Installez et lancez GanttProject.</li>
                                    </ol>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>Premières options</CardHeader>
                                <CardContent>
                                    <p className="text-sm">À l'ouverture : définissez la langue (File → Language) et le format date si nécessaire. Créez un nouveau projet (File → New).</p>
                                </CardContent>
                            </Card>
                        </div>
                    </article>

                    <Separator />

                    <article id="create-project" className="mt-6 mb-6">
                        <h3 className="text-lg font-semibold">2 — Projet et des tâches</h3>

                        <Card>
                            <CardContent>
                                <ol className="list-decimal pl-5 text-sm mt-2 space-y-2">
                                    <li><strong>Créer un nouveau projet</strong> — Projet → Nouveau</li>
                                    <ol className="list-decimal pl-5 text-sm mt-2 space-y-2">
                                        <p><strong>Étape 1 :</strong> nom du projet, organisation, lien internet et description.</p>
                                        <p><strong>Étape 2 :</strong> choix des rôles.</p>
                                        <p><strong>Étape 3 :</strong> définition des jours fériés et week-ends</p>
                                    </ol>
                                    <li><strong>Ajouter des tâches</strong> — Clic droit → Nouvelle tâche. Donnez-lui un nom.</li>
                                    <li><strong>Propriétés</strong> — Double clic → Saisissez la durée en jours, les prédécesseurs et le(s) responsable(s) de la tâche.</li>
                                </ol>
                            </CardContent>
                        </Card>
                    </article>

                    <Separator />

                    <article id="resources" className="mt-6 mb-6">
                        <h3 className="text-lg font-semibold">3 — Ressources</h3>
                        <Card className="mt-3">
                            <CardContent>
                                <ol className="list-decimal pl-5 text-sm mt-2 space-y-2">
                                    <li><strong>Créer une ressource</strong> : Diagramme de resources → Double clic → Nouveau personnel (nom, coût/h).</li>
                                    <li><strong>Assigner une ressource</strong> : Sélectionnez une tâche → Resources → ajouter.</li>
                                </ol>

                                <Table className="mt-3">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Nom</TableHead>
                                            <TableHead>Taux</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Développeur 1</TableCell>
                                            <TableCell>50 €/h</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Développeur 2</TableCell>
                                            <TableCell>80 €/h</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </article>

                    <Separator />

                    <article id="calendar" className="mt-6 mb-6">
                        <h3 className="text-lg font-semibold">4 — Calendrier & jours fériés</h3>
                        <Card className="mt-3">
                            <CardContent>
                                <ol className="list-decimal pl-5 text-sm mt-2 space-y-2">
                                    <li><strong>Configurer les semaines</strong> : Projet → Calendrier → Calendar : définissez les jours ouvrés par défaut (ex : Lun–Ven) et les heures journalières.</li>
                                    <li><strong>Calendriers individuels</strong> : Diagramme de ressources → Double clic sur une ressource → Jours de congés → rentrez les dates d'indisponibilité de la ressource.</li>
                                </ol>
                            </CardContent>
                        </Card>
                    </article>
                </section>
            </main>
        </div>
    );
}
