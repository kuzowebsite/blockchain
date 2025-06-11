"use client"

import { useState } from "react"
import {
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Shield,
  Wallet,
  Database,
  Cloud,
  Lock,
  TrendingUp,
  Award,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart,
  LineChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"

export default function DashboardPage() {
  const [balance] = useState(125.8472)
  const [stakingRewards] = useState(2.3456)
  const [totalValue] = useState(158420.5)
  const [dailyChange] = useState(+12.5)

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex h-14 md:h-16 items-center gap-4 border-b bg-muted/40 px-4 lg:px-6">
        <MobileNav />
        <div className="w-full flex-1">
          <h1 className="text-xl md:text-2xl font-bold">Хяналтын самбар</h1>
          <p className="text-xs md:text-sm text-muted-foreground">Дэлхийн хэмжээний блокчейн үйл ажилгаа</p>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Badge variant="secondary" className="hidden md:flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            Системийн статус: Хэвийн
          </Badge>
          <Button size="sm" className="gap-2">
            <Wallet className="h-4 w-4" />
            <span className="hidden md:inline">Хэтэвч холбох</span>
          </Button>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 md:gap-6 p-4 md:p-6">
        {/* Гол үзүүлэлтүүд */}
        <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2">
              <CardTitle className="text-xs md:text-sm font-medium">Нийт үлдэгдэл</CardTitle>
              <DollarSign className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold">{balance.toFixed(4)} QTC</div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-muted-foreground">
                <ArrowUpRight className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+{dailyChange}%</span>
                <span className="hidden md:inline">сүүлийн 24 цагт</span>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2">
              <CardTitle className="text-xs md:text-sm font-medium">USD дүн</CardTitle>
              <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold">${totalValue.toLocaleString()}</div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-muted-foreground">
                <ArrowUpRight className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+$2,450</span>
                <span className="hidden md:inline">өнөөдөр</span>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2">
              <CardTitle className="text-xs md:text-sm font-medium">Staking шагнал</CardTitle>
              <Activity className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold">{stakingRewards.toFixed(4)} QTC</div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-muted-foreground">
                <span className="text-green-500">15.2% APY</span>
                <span className="hidden md:inline">жилийн хүү</span>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2">
              <CardTitle className="text-xs md:text-sm font-medium">Сүлжээний хамгаалалт</CardTitle>
              <Shield className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold">99.99%</div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Квант тэсвэртэй</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Дэлгэрэнгүй мэдээлэл */}
        <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
          {/* Арилжааны үйл ажилгаа */}
          <Card className="lg:col-span-2">
            <CardHeader className="pb-3 md:pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base md:text-lg">Блокчейн үйл ажилгаа</CardTitle>
                  <CardDescription className="text-xs md:text-sm">
                    Гүйлгээ, staking, смарт гэрээний удирдлага
                  </CardDescription>
                </div>
                <Button size="sm" variant="outline" className="gap-1 md:gap-2 text-xs md:text-sm">
                  <span>Бүгдийг үзэх</span> <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="transactions" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="transactions" className="text-xs md:text-sm">
                    Гүйлгээ
                  </TabsTrigger>
                  <TabsTrigger value="staking" className="text-xs md:text-sm">
                    Staking
                  </TabsTrigger>
                  <TabsTrigger value="defi" className="text-xs md:text-sm">
                    DeFi
                  </TabsTrigger>
                  <TabsTrigger value="nft" className="text-xs md:text-sm">
                    NFT
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="transactions" className="space-y-3 md:space-y-4 mt-3">
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        type: "Илгээх",
                        amount: "-25.5 QTC",
                        to: "0x1234...5678",
                        status: "Баталгаажсан",
                        time: "2 цаг өмнө",
                      },
                      {
                        type: "Хүлээн авах",
                        amount: "+50.0 QTC",
                        from: "0x8765...4321",
                        status: "Баталгаажсан",
                        time: "5 цаг өмнө",
                      },
                      {
                        type: "Staking",
                        amount: "-100.0 QTC",
                        to: "Validator #3",
                        status: "Идэвхтэй",
                        time: "1 өдөр өмнө",
                      },
                    ].map((tx, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 md:p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-2 md:gap-3">
                          <div
                            className={`p-1 md:p-2 rounded-full ${
                              tx.amount.startsWith("+") ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                            }`}
                          >
                            {tx.amount.startsWith("+") ? (
                              <ArrowDownRight className="h-3 w-3 md:h-4 md:w-4" />
                            ) : (
                              <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
                            )}
                          </div>
                          <div>
                            <p className="text-xs md:text-sm font-medium">{tx.type}</p>
                            <p className="text-xs text-muted-foreground">
                              {tx.to ? `Хүлээн авагч: ${tx.to}` : `Илгээгч: ${tx.from}`}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p
                            className={`text-xs md:text-sm font-medium ${tx.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                          >
                            {tx.amount}
                          </p>
                          <div className="flex items-center gap-1 md:gap-2">
                            <Badge
                              variant={tx.status === "Баталгаажсан" ? "default" : "secondary"}
                              className="text-[10px] md:text-xs"
                            >
                              {tx.status}
                            </Badge>
                            <span className="text-[10px] md:text-xs text-muted-foreground">{tx.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="staking" className="space-y-3 md:space-y-4 mt-3">
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        validator: "Validator #1",
                        staked: "75.0 QTC",
                        rewards: "1.56 QTC",
                        apy: "15.2%",
                        status: "Идэвхтэй",
                      },
                      {
                        validator: "Validator #3",
                        staked: "50.0 QTC",
                        rewards: "0.78 QTC",
                        apy: "12.8%",
                        status: "Идэвхтэй",
                      },
                    ].map((stake, i) => (
                      <div key={i} className="p-3 md:p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2 md:mb-3">
                          <span className="text-xs md:text-sm font-medium">{stake.validator}</span>
                          <Badge
                            variant={stake.status === "Идэвхтэй" ? "default" : "secondary"}
                            className="text-[10px] md:text-xs"
                          >
                            {stake.status}
                          </Badge>
                        </div>
                        <Progress value={75 - i * 15} className="mb-2 md:mb-3" />
                        <div className="grid grid-cols-3 gap-2 md:gap-4 text-[10px] md:text-xs">
                          <div>
                            <p className="text-muted-foreground">Staking дүн</p>
                            <p className="font-medium">{stake.staked}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Шагнал</p>
                            <p className="font-medium text-green-600">{stake.rewards}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">APY</p>
                            <p className="font-medium">{stake.apy}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="defi" className="space-y-3 md:space-y-4 mt-3">
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        protocol: "Lending Pool",
                        position: "Зээлдүүлэгч",
                        amount: "1,250 QTC",
                        apy: "8.5%",
                        status: "Идэвхтэй",
                      },
                      {
                        protocol: "Liquidity Pool",
                        position: "LP Token",
                        amount: "500 QTC",
                        apy: "12.3%",
                        status: "Идэвхтэй",
                      },
                    ].map((defi, i) => (
                      <div key={i} className="p-3 md:p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-1 md:mb-2">
                          <div>
                            <p className="text-xs md:text-sm font-medium">{defi.protocol}</p>
                            <p className="text-[10px] md:text-xs text-muted-foreground">{defi.position}</p>
                          </div>
                          <Badge
                            variant={defi.status === "Идэвхтэй" ? "default" : "secondary"}
                            className="text-[10px] md:text-xs"
                          >
                            {defi.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-[10px] md:text-xs">
                          <span>
                            Дүн: <span className="font-medium">{defi.amount}</span>
                          </span>
                          <span>
                            APY: <span className="font-medium text-green-600">{defi.apy}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="nft" className="space-y-3 md:space-y-4 mt-3">
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {[
                      {
                        name: "Quantum Art #1234",
                        collection: "Quantum Collection",
                        price: "15.5 QTC",
                        status: "Эзэмшиж буй",
                      },
                      {
                        name: "Digital Asset #567",
                        collection: "Future Assets",
                        price: "8.2 QTC",
                        status: "Зарагдаж буй",
                      },
                    ].map((nft, i) => (
                      <div key={i} className="p-3 md:p-4 border rounded-lg">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-2 md:mb-3 flex items-center justify-center">
                          <Award className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-xs md:text-sm font-medium">{nft.name}</p>
                          <p className="text-[10px] md:text-xs text-muted-foreground">{nft.collection}</p>
                          <div className="flex justify-between items-center mt-1 md:mt-2">
                            <span className="text-[10px] md:text-xs font-medium">{nft.price}</span>
                            <Badge
                              variant={nft.status === "Эзэмшиж буй" ? "default" : "secondary"}
                              className="text-[10px] md:text-xs"
                            >
                              {nft.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Системийн статус */}
          <Card>
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Database className="h-4 w-4 md:h-5 md:w-5" />
                Системийн статус
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">Дэд бүтэц болон хамгаалалтын хяналт</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    <span className="text-xs md:text-sm">PostgreSQL</span>
                  </div>
                  <Badge variant="default" className="text-[10px] md:text-xs">
                    Онлайн
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cloud className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    <span className="text-xs md:text-sm">AWS S3</span>
                  </div>
                  <Badge variant="default" className="text-[10px] md:text-xs">
                    Онлайн
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    <span className="text-xs md:text-sm">Постквант Auth</span>
                  </div>
                  <Badge variant="default" className="text-[10px] md:text-xs">
                    Идэвхтэй
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                    <span className="text-xs md:text-sm">DPoS зөвшилцөл</span>
                  </div>
                  <Badge variant="default" className="text-[10px] md:text-xs">
                    21/21 Validator
                  </Badge>
                </div>
              </div>

              <div className="pt-3 md:pt-4 border-t">
                <h4 className="font-medium text-xs md:text-sm mb-2 md:mb-3">Сүүлийн үйл ажилгаа</h4>
                <div className="space-y-1 md:space-y-2 text-[10px] md:text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span className="text-muted-foreground">Системийн шинэчлэл амжилттай</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span className="text-muted-foreground">Хамгаалалтын скан дууссан</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-yellow-500" />
                    <span className="text-muted-foreground">Backup процесс явагдаж байна</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Дэлхийн статистик */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <BarChart3 className="h-4 w-4 md:h-5 md:w-5" />
                Сүлжээний статистик
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs md:text-sm">
                  <span>Нийт гүйлгээ (24ц)</span>
                  <span className="font-medium">2.5M</span>
                </div>
                <Progress value={85} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs md:text-sm">
                  <span>Идэвхтэй хаяг</span>
                  <span className="font-medium">450K</span>
                </div>
                <Progress value={65} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs md:text-sm">
                  <span>Staking хувь</span>
                  <span className="font-medium">68%</span>
                </div>
                <Progress value={68} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <PieChart className="h-4 w-4 md:h-5 md:w-5" />
                Хөрөнгийн хуваарилалт
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm">QTC Token</span>
                  <span className="font-medium text-xs md:text-sm">65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm">Staking шагнал</span>
                  <span className="font-medium text-xs md:text-sm">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm">DeFi позици</span>
                  <span className="font-medium text-xs md:text-sm">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm">NFT цуглуулга</span>
                  <span className="font-medium text-xs md:text-sm">5%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <LineChart className="h-4 w-4 md:h-5 md:w-5" />
                Гүйцэтгэлийн үзүүлэлт
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm">Блокийн хугацаа</span>
                  <span className="font-medium text-green-600 text-xs md:text-sm">0.8с</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm">TPS</span>
                  <span className="font-medium text-green-600 text-xs md:text-sm">10,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm">Гүйлгээний төлбөр</span>
                  <span className="font-medium text-green-600 text-xs md:text-sm">$0.001</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm">Uptime</span>
                  <span className="font-medium text-green-600 text-xs md:text-sm">99.99%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
