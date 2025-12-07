import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 mt-16">
                <h1 className="text-3xl font-bold mb-8 text-center">İletişim</h1>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Bize Ulaşın</h2>
                            <p className="text-muted-foreground">
                                Sorularınız, önerileriniz veya işbirliği teklifleriniz için bizimle iletişime geçmekten çekinmeyin.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="font-medium">E-posta</div>
                                    <div className="text-sm text-muted-foreground">info@unikent.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="font-medium">Telefon</div>
                                    <div className="text-sm text-muted-foreground">+90 555 000 0000</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="font-medium">Adres</div>
                                    <div className="text-sm text-muted-foreground">ISUBÜ, Isparta, Türkiye</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Adınız</label>
                                    <Input id="name" placeholder="Adınız" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="surname" className="text-sm font-medium">Soyadınız</label>
                                    <Input id="surname" placeholder="Soyadınız" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">E-posta</label>
                                <Input id="email" type="email" placeholder="ornek@email.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Konu</label>
                                <Input id="subject" placeholder="Mesajınızın konusu" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Mesajınız</label>
                                <Textarea id="message" placeholder="Bize iletmek istediğiniz mesaj..." className="min-h-[120px]" />
                            </div>

                            <Button type="submit" className="w-full">Gönder</Button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
