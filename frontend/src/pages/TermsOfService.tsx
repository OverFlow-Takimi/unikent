import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 mt-16">
                <h1 className="text-3xl font-bold mb-6">Kullanım Koşulları</h1>
                <div className="prose dark:prose-invert max-w-none space-y-4">
                    <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>

                    <h2 className="text-2xl font-semibold mt-4">1. Kabul</h2>
                    <p>
                        UniKent hizmetlerini kullanarak bu koşulları kabul etmiş sayılırsınız.
                        Eğer bu koşulları kabul etmiyorsanız, lütfen hizmetlerimizi kullanmayınız.
                    </p>

                    <h2 className="text-2xl font-semibold mt-4">2. Hizmet Kullanımı</h2>
                    <p>
                        Hizmetlerimizi yasalara uygun ve başkalarının haklarına saygılı bir şekilde kullanmalısınız.
                        Platform üzerinden zararlı içerik paylaşmak yasaktır.
                    </p>

                    <h2 className="text-2xl font-semibold mt-4">3. Hesap Güvenliği</h2>
                    <p>
                        Hesap bilgilerinizin güvenliğini sağlamak sizin sorumluluğunuzdadır. Şüpheli bir durum fark ederseniz hemen bize bildirmelisiniz.
                    </p>

                    <h2 className="text-2xl font-semibold mt-4">4. Değişiklikler</h2>
                    <p>
                        Bu koşulları zaman zaman güncelleyebiliriz. Önemli değişiklikleri size bildireceğiz.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
