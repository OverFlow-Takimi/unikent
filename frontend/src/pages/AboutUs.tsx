import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 mt-16">
                <h1 className="text-3xl font-bold mb-6">Hakkımızda</h1>
                <div className="prose dark:prose-invert max-w-none space-y-6">
                    <p className="text-lg text-muted-foreground">
                        UniKent, üniversite öğrencilerinin şehir tercihi yaparken en doğru kararı vermelerine yardımcı olmak için tasarlanmış kapsamlı bir rehberdir.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Misyonumuz</h2>
                            <p>
                                Öğrencilere şeffaf, güncel ve detaylı şehir verileri sunarak, eğitim hayatlarını geçirecekleri şehri seçerken bilinçli tercihler yapmalarını sağlamak.
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-xl border border-border">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Vizyonumuz</h2>
                            <p>
                                Türkiye'nin en kapsamlı ve güvenilir öğrenci şehri veri tabanı olmak ve öğrenci deneyimini merkeze alan bir topluluk oluşturmak.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Ekibimiz</h2>
                        <p>
                            OverFlow Takımı olarak, teknolojiyi eğitim ve sosyal fayda ile birleştiren çözümler üretiyoruz.
                            Genç ve dinamik ekibimizle, öğrenci ihtiyaçlarını en iyi şekilde anlıyor ve buna uygun çözümler geliştiriyoruz.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
