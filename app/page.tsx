import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Lock,
  Coins,
  Database,
  Cloud,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигацийн самбар */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MobileNav />
          <Link className="flex items-center justify-center" href="/">
            <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <span className="ml-2 text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              QuantumChain
            </span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/dashboard">
              Хяналтын самбар
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/trading">
              Арилжаа
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/wallet">
              Хэтэвч
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/mining">
              Олборлолт
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/defi">
              DeFi
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/nft">
              NFT
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/storage">
              Хадгалалт
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/auth">
              Нэвтрэх
            </Link>
          </nav>
        </div>
      </header>

      {/* Гол хэсэг */}
      <section className="relative w-full py-12 md:py-20 lg:py-32 xl:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 md:space-y-8 text-center">
            <div className="space-y-3 md:space-y-4">
              <Badge variant="secondary" className="px-3 py-1 md:px-4 md:py-2">
                <Globe className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">Дэлхийн хэмжээний блокчейн платформ</span>
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                Квант хамгаалалттай
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Блокчейн Экосистем
                </span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-sm md:text-lg">
                Дэлхийн хэмжээнд үйл ажилгаа явуулах, квант тооцоололд тэсвэртэй, өндөр хамгаалалттай блокчейн дэд
                бүтэц. DPoS зөвшилцөл болон постквант криптографийн технологитой.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button asChild size="lg" className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
                <Link href="/dashboard">
                  Эхлэх <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6" asChild>
                <Link href="/whitepaper">Цагаан ном үзэх</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-6 md:pt-8">
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-primary">$2.5B+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Нийт арилжааны хэмжээ</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-primary">150+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Орны хэрэглэгчид</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-primary">99.99%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Системийн тогтвортой байдал</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground">Дэмжлэг үйлчилгээ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Онцлогууд */}
      <section className="w-full py-12 md:py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-3 md:mb-4">
              Дэвшилтэт технологи
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-lg">
              Дэлхийн хамгаалалтын стандартыг хангасан технологийн багц
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <CardHeader>
                <Lock className="h-8 w-8 md:h-12 md:w-12 text-primary mb-3 md:mb-4" />
                <CardTitle className="text-lg md:text-xl">Постквант хамгаалалт</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Dilithium/Kyber алгоритм болон liboqs интеграци ашиглан ирээдүйн квант тооцоололд бэлэн
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Квант тэсвэртэй гарын үсэг
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Дэвшилтэт түлхүүр солилцоо
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    NIST стандартын дагуу
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Hardware Security Module дэмжлэг
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
              <CardHeader>
                <Zap className="h-8 w-8 md:h-12 md:w-12 text-blue-500 mb-3 md:mb-4" />
                <CardTitle className="text-lg md:text-xl">DPoS зөвшилцөл</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Хурдан, эрчим хүч хэмнэсэн, ардчилсан засаглалтай Delegated Proof of Stake систем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />1 секундээс бага гүйцэтгэл
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Бага эрчим хүчний хэрэглээ
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Олон нийтийн санал өгөлт
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Автомат шагнал хуваарилалт
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
              <CardHeader>
                <Globe className="h-8 w-8 md:h-12 md:w-12 text-green-500 mb-3 md:mb-4" />
                <CardTitle className="text-lg md:text-xl">Дэлхийн интеграци</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Rust/Axum API, PostgreSQL, AWS S3 болон олон улсын төлбөрийн системүүдтэй бүрэн интеграци
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Өндөр гүйцэтгэлтэй Rust backend
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Шифрлэгдсэн өгөгдлийн сан
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Аюулгүй файл удирдлага
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    Олон улсын төлбөрийн систем
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Үйлчилгээнүүд */}
      <section className="w-full py-12 md:py-20 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-3 md:mb-4">
              Иж бүрэн үйлчилгээ
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-lg">
              Блокчейн технологийн бүх боломжийг нэг платформд
            </p>
          </div>
          <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <CardTitle>Арилжааны төв</CardTitle>
                <CardDescription>Дэлхийн хэмжээний криптовалют арилжаа, дэвшилтэт арилжааны хэрэгслүүд</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/trading">Арилжаа эхлэх</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Coins className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <CardTitle>DeFi протоколууд</CardTitle>
                <CardDescription>Зээлдүүлэг, хадгаламж, урьдчилгаа арилжаа, ликвидность пул</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/defi">DeFi үзэх</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Award className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <CardTitle>NFT зах зээл</CardTitle>
                <CardDescription>Цифр хөрөнгө үүсгэх, арилжих, цуглуулах платформ</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/nft">NFT зах зээл</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Database className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <CardTitle>Олборлолтын пул</CardTitle>
                <CardDescription>Хамтарсан олборлолт, автомат шагнал хуваарилалт</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/mining">Олборлолт</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Cloud className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <CardTitle>Аюулгүй хадгалалт</CardTitle>
                <CardDescription>Шифрлэгдсэн файл хадгалалт, signed URL, backup систем</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/storage">Хадгалалт</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Users className="h-8 w-8 md:h-10 md:w-10 text-primary mb-2" />
                <CardTitle>Засаглалын систем</CardTitle>
                <CardDescription>Олон нийтийн санал өгөлт, протоколын өөрчлөлт</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/governance">Засаглал</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Статистик */}
      <section className="w-full py-12 md:py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-3 md:mb-4">
              Дэлхийн хэмжээний үр дүн
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-lg">
              Манай платформын амжилтын үзүүлэлтүүд
            </p>
          </div>
          <div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-4">
            <div className="text-center p-4 md:p-6 rounded-lg bg-gradient-to-br from-primary/5 to-transparent">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">2.5M+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Идэвхтэй хэрэглэгч</div>
            </div>
            <div className="text-center p-4 md:p-6 rounded-lg bg-gradient-to-br from-blue-500/5 to-transparent">
              <div className="text-2xl md:text-4xl font-bold text-blue-500 mb-1 md:mb-2">$50B+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Нийт гүйлгээний хэмжээ</div>
            </div>
            <div className="text-center p-4 md:p-6 rounded-lg bg-gradient-to-br from-green-500/5 to-transparent">
              <div className="text-2xl md:text-4xl font-bold text-green-500 mb-1 md:mb-2">150+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Дэмжигдсэн орон</div>
            </div>
            <div className="text-center p-4 md:p-6 rounded-lg bg-gradient-to-br from-purple-500/5 to-transparent">
              <div className="text-2xl md:text-4xl font-bold text-purple-500 mb-1 md:mb-2">99.99%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Хамтрагчид */}
      <section className="w-full py-12 md:py-20 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-3 md:mb-4">
              Итгэмжлэгдсэн хамтрагчид
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-lg">
              Дэлхийн тэргүүлэх компаниуд манай технологид итгэдэг
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 items-center opacity-60">
            {[
              "Microsoft",
              "Google",
              "Amazon",
              "IBM",
              "Oracle",
              "Samsung",
              "JPMorgan",
              "Goldman Sachs",
              "Visa",
              "Mastercard",
              "PayPal",
              "Stripe",
            ].map((company, i) => (
              <div key={i} className="text-center p-3 md:p-4 rounded-lg bg-background/50">
                <div className="font-semibold text-xs md:text-sm text-muted-foreground">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Дуудлага */}
      <section className="w-full py-12 md:py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 md:space-y-8 text-center">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">Ирээдүйг хамт бүтээцгээе</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground text-sm md:text-lg">
                Квант тэсвэртэй блокчейн хувьсгалд нэгдээрэй. Аюулгүй, өргөжих чадвартай аппликейшн бүтээж эхлээрэй.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button size="lg" className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6" asChild>
                <Link href="/dashboard">Бүтээж эхлэх</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg px-6 py-5 md:px-8 md:py-6" asChild>
                <Link href="/docs">Баримт бичиг үзэх</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Хөл хэсэг */}
      <footer className="w-full py-8 md:py-12 bg-muted/50 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <span className="ml-2 text-base md:text-lg font-bold">QuantumChain Mongolia</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Дэлхийн хэмжээний квант тэсвэртэй блокчейн платформ. Постквант хамгаалалттай, аюулгүй, найдвартай.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-semibold">Платформ</h4>
              <nav className="flex flex-col space-y-2 text-xs md:text-sm">
                <Link href="/trading" className="text-muted-foreground hover:text-primary">
                  Арилжаа
                </Link>
                <Link href="/defi" className="text-muted-foreground hover:text-primary">
                  DeFi
                </Link>
                <Link href="/nft" className="text-muted-foreground hover:text-primary">
                  NFT
                </Link>
                <Link href="/mining" className="text-muted-foreground hover:text-primary">
                  Олборлолт
                </Link>
              </nav>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-semibold">Хөгжүүлэгчид</h4>
              <nav className="flex flex-col space-y-2 text-xs md:text-sm">
                <Link href="/docs" className="text-muted-foreground hover:text-primary">
                  API баримт
                </Link>
                <Link href="/sdk" className="text-muted-foreground hover:text-primary">
                  SDK
                </Link>
                <Link href="/github" className="text-muted-foreground hover:text-primary">
                  GitHub
                </Link>
                <Link href="/community" className="text-muted-foreground hover:text-primary">
                  Нийгэмлэг
                </Link>
              </nav>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-semibold">Дэмжлэг</h4>
              <nav className="flex flex-col space-y-2 text-xs md:text-sm">
                <Link href="/help" className="text-muted-foreground hover:text-primary">
                  Тусламж
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Холбоо барих
                </Link>
                <Link href="/status" className="text-muted-foreground hover:text-primary">
                  Системийн статус
                </Link>
                <Link href="/security" className="text-muted-foreground hover:text-primary">
                  Хамгаалалт
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2024 QuantumChain Mongolia. Бүх эрх хуулиар хамгаалагдсан. Постквант хамгаалалттай.
            </p>
            <nav className="flex gap-4 mt-3 sm:mt-0">
              <Link className="text-xs hover:underline underline-offset-4" href="/terms">
                Үйлчилгээний нөхцөл
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
                Нууцлалын бодлого
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/cookies">
                Cookie бодлого
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
