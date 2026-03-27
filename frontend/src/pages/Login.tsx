import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { GraduationCap, Loader2 } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Kullanıcı adı en az 6 karakter olmalıdır.",
  }),
  password: z.string().min(6, {
    message: "Şifre en az 6 karakter olmalıdır.",
  }),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      console.log(values);
      setIsLoading(false);

      // Mock data
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Test",
          surname: "Kullanıcı",
          username: values.username,
        }),
      );

      toast.success("Giriş yapıldı", {
        description: "Başarıyla giriş yaptınız.",
      });
      window.location.href = "/"; // hmmm??
    }, 2000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4 py-10">
      <Card className="w-full max-w-md shadow-lg border-muted/40">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-2">
            <GraduationCap className="w-7 h-7 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Tekrar Hoşgeldin
          </CardTitle>
          <CardDescription>Hesabına giriş yaparak devam et</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kullanıcı Adı</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Şifre</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-11"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Giriş yapılıyor...
                  </>
                ) : (
                  "Giriş Yap"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-center text-sm text-muted-foreground">
          <div className="text-center w-full">
            Hesabın yok mu?{" "}
            <Link
              to="/register"
              className="font-semibold text-primary hover:underline"
            >
              Kayıt Ol
            </Link>
          </div>
        </CardFooter>
      </Card>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
    </div>
  );
};

export default Login;
