"use client"

import { useState } from "react"
import {
  TrendingUp,
  BarChart3,
  LineChart,
  Activity,
  DollarSign,
  Globe,
  Zap,
  Shield,
  Clock,
  Target,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MobileNav } from "@/components/mobile-nav"

export default function TradingPage() {
  const [selectedPair, setSelectedPair] = useState("QTC/USDT")
  const [orderType, setOrderType] = useState("market")
  const [tradeType, setTradeType] = useState("buy")

  const tradingPairs = [
    { pair: "QTC/USDT", price: 1250.45, change: +5.2, volume: "2.5M", high: 1285.3, low: 1205.8 },
    { pair: "QTC/BTC", price: 0.0285, change: -2.1, volume: "850K", high: 0.0295, low: 0.0275 },
    { pair: "QTC/ETH", price: 0.485, change: +8.7, volume: "1.2M", high: 0.495, low: 0.465 },
    { pair: "QTC/BNB", price: 2.85, change: +3.4, volume: "680K", high: 2.95, low: 2.75 },
  ]

  const recentTrades = [
    { price: 1250.45, amount: 0.5, time: "14:32:15", type: "buy" },
    { price: 1249.8, amount: 1.2, time: "14:32:10", type: "sell" },
    { price: 1251.2, amount: 0.8, time: "14:32:05", type: "buy" },
    { price: 1248.9, amount: 2.1, time: "14:32:00", type: "sell" },
    { price: 1252.15, amount: 0.3, time: "14:31:55", type: "buy" },
  ]

  const orderBook = {
    asks: [
      { price: 1252.5, amount: 1.5, total: 1.5 },
      { price: 1251.8, amount: 2.3, total: 3.8 },
      { price: 1251.2, amount: 0.8, total: 4.6 },
      { price: 1250.9, amount: 1.9, total: 6.5 },
      { price: 1250.45, amount: 3.2, total: 9.7 },
    ],
    bids: [
      { price: 1249.8, amount: 2.1, total: 2.1 },
      { price: 1249.2, amount: 1.8, total: 3.9 },
      { price: 1248.6, amount: 0.9, total: 4.8 },
      { price: 1248.1, amount: 2.5, total: 7.3 },
      { price: 1247.5, amount: 1.2, total: 8.5 },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="container flex h-14 items-center">
          <MobileNav />
          <div className="flex-1 text-center">
            <h1 className="text-lg font-bold">Арилжааны төв</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Арилжааны төв</h1>
            <p className="text-muted-foreground">Дэлхийн хэмжээний криптовалют арилжаа</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              Зах зээл: Нээлттэй
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              24/7 Арилжаа
            </Badge>
          </div>
        </div>

        {/* Зах зээлийн тойм */}
        <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2">
              <CardTitle className="text-xs md:text-sm font-medium">Нийт зах зээлийн үнэ</CardTitle>
              <DollarSign className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold">$2.5T</div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+5.2%</span>
                <span className="hidden md:inline">24 цагийн өөрчлөлт</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2">
              <CardTitle className="text-xs md:text-sm font-medium">Арилжааны хэмжээ</CardTitle>
              <BarChart3 className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold">$125B</div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+12.8%</span>
                <span className="hidden md:inline">өнөөдрийн хэмжээ</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2">
              <CardTitle className="text-xs md:text-sm font-medium">Идэвхтэй арилжаачид</CardTitle>
              <Activity className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold">2.5M</div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+8.5%</span>
                <span className="hidden md:inline">сүүлийн 7 хоногт</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2">
              <CardTitle className="text-xs md:text-sm font-medium">QTC үнэ</CardTitle>
              <Zap className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg md:text-2xl font-bold">$1,250.45</div>
              <div className="flex items-center gap-1 md:gap-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+5.2%</span>
                <span className="hidden md:inline">24 цагийн өөрчлөлт</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Trading Interface */}
        <div className="md:hidden space-y-4">
          {/* Trading Pairs - Mobile */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Арилжааны хос</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {tradingPairs.slice(0, 3).map((pair, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors hover:bg-muted/50 ${
                    selectedPair === pair.pair ? "border-primary bg-primary/5" : ""
                  }`}
                  onClick={() => setSelectedPair(pair.pair)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{pair.pair}</span>
                    <Badge variant={pair.change > 0 ? "default" : "destructive"} className="text-xs">
                      {pair.change > 0 ? "+" : ""}
                      {pair.change}%
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Үнэ:</span>
                      <span className="font-medium">${pair.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Хэмжээ:</span>
                      <span>{pair.volume}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Chart - Mobile */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" />
                  {selectedPair} График
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">TradingView График</p>
                  <p className="text-xs text-muted-foreground">Дэвшилтэт техникийн шинжилгээ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trading Form - Mobile */}
          <Card>
            <CardHeader>
              <CardTitle>Арилжаа хийх</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant={tradeType === "buy" ? "default" : "outline"}
                    onClick={() => setTradeType("buy")}
                    className="flex-1"
                  >
                    Худалдан авах
                  </Button>
                  <Button
                    size="sm"
                    variant={tradeType === "sell" ? "destructive" : "outline"}
                    onClick={() => setTradeType("sell")}
                    className="flex-1"
                  >
                    Зарах
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label>Захиалгын төрөл</Label>
                    <Select value={orderType} onValueChange={setOrderType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="market">Зах зээлийн захиалга</SelectItem>
                        <SelectItem value="limit">Хязгаарлагдмал захиалга</SelectItem>
                        <SelectItem value="stop">Зогсоох захиалга</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {orderType !== "market" && (
                    <div className="space-y-2">
                      <Label>Үнэ (USDT)</Label>
                      <Input type="number" placeholder="1250.45" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Хэмжээ (QTC)</Label>
                    <Input type="number" placeholder="0.00" />
                    <div className="grid grid-cols-4 gap-2">
                      <Button size="sm" variant="outline">
                        25%
                      </Button>
                      <Button size="sm" variant="outline">
                        50%
                      </Button>
                      <Button size="sm" variant="outline">
                        75%
                      </Button>
                      <Button size="sm" variant="outline">
                        100%
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Нийт дүн (USDT)</Label>
                    <Input type="number" placeholder="0.00" readOnly />
                  </div>

                  <Button
                    className={`w-full ${tradeType === "buy" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
                  >
                    {tradeType === "buy" ? "Худалдан авах" : "Зарах"} QTC
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Trading Interface */}
        <div className="hidden md:grid gap-6 lg:grid-cols-4">
          {/* Арилжааны хос */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Арилжааны хос</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tradingPairs.map((pair, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors hover:bg-muted/50 ${
                    selectedPair === pair.pair ? "border-primary bg-primary/5" : ""
                  }`}
                  onClick={() => setSelectedPair(pair.pair)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{pair.pair}</span>
                    <Badge variant={pair.change > 0 ? "default" : "destructive"} className="text-xs">
                      {pair.change > 0 ? "+" : ""}
                      {pair.change}%
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Үнэ:</span>
                      <span className="font-medium">${pair.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Хэмжээ:</span>
                      <span>{pair.volume}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">24ц Өндөр/Доод:</span>
                      <span className="text-xs">
                        ${pair.high}/${pair.low}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* График */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" />
                  {selectedPair} График
                </CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    1ц
                  </Button>
                  <Button size="sm" variant="outline">
                    4ц
                  </Button>
                  <Button size="sm" variant="outline">
                    1ө
                  </Button>
                  <Button size="sm" variant="default">
                    1с
                  </Button>
                  <Button size="sm" variant="outline">
                    1ж
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium">TradingView График</p>
                  <p className="text-sm text-muted-foreground">Дэвшилтэт техникийн шинжилгээ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Захиалгын ном */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Захиалгын ном</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="orderbook" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="orderbook">Захиалга</TabsTrigger>
                  <TabsTrigger value="trades">Арилжаа</TabsTrigger>
                </TabsList>

                <TabsContent value="orderbook" className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground grid grid-cols-3 gap-2">
                      <span>Үнэ</span>
                      <span className="text-right">Хэмжээ</span>
                      <span className="text-right">Нийт</span>
                    </div>

                    {/* Зарах захиалгууд */}
                    <div className="space-y-1">
                      {orderBook.asks.map((ask, i) => (
                        <div key={i} className="text-xs grid grid-cols-3 gap-2 py-1 hover:bg-red-50 cursor-pointer">
                          <span className="text-red-600 font-medium">{ask.price.toFixed(2)}</span>
                          <span className="text-right">{ask.amount.toFixed(3)}</span>
                          <span className="text-right text-muted-foreground">{ask.total.toFixed(3)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Одоогийн үнэ */}
                    <div className="py-2 text-center border-y">
                      <span className="text-lg font-bold text-green-600">$1,250.45</span>
                    </div>

                    {/* Худалдан авах захиалгууд */}
                    <div className="space-y-1">
                      {orderBook.bids.map((bid, i) => (
                        <div key={i} className="text-xs grid grid-cols-3 gap-2 py-1 hover:bg-green-50 cursor-pointer">
                          <span className="text-green-600 font-medium">{bid.price.toFixed(2)}</span>
                          <span className="text-right">{bid.amount.toFixed(3)}</span>
                          <span className="text-right text-muted-foreground">{bid.total.toFixed(3)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="trades" className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground grid grid-cols-3 gap-2">
                      <span>Үнэ</span>
                      <span className="text-right">Хэмжээ</span>
                      <span className="text-right">Цаг</span>
                    </div>

                    {recentTrades.map((trade, i) => (
                      <div key={i} className="text-xs grid grid-cols-3 gap-2 py-1">
                        <span className={`font-medium ${trade.type === "buy" ? "text-green-600" : "text-red-600"}`}>
                          {trade.price.toFixed(2)}
                        </span>
                        <span className="text-right">{trade.amount.toFixed(3)}</span>
                        <span className="text-right text-muted-foreground">{trade.time}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Trading Section */}
        <div className="hidden md:grid gap-6 lg:grid-cols-3">
          {/* Захиалга өгөх */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Арилжаа хийх</CardTitle>
              <CardDescription>Дэвшилтэт арилжааны хэрэгслүүд</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="spot" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="spot">Spot</TabsTrigger>
                  <TabsTrigger value="margin">Margin</TabsTrigger>
                  <TabsTrigger value="futures">Futures</TabsTrigger>
                  <TabsTrigger value="options">Options</TabsTrigger>
                </TabsList>

                <TabsContent value="spot" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Худалдан авах */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant={tradeType === "buy" ? "default" : "outline"}
                          onClick={() => setTradeType("buy")}
                          className="flex-1"
                        >
                          Худалдан авах
                        </Button>
                        <Button
                          size="sm"
                          variant={tradeType === "sell" ? "destructive" : "outline"}
                          onClick={() => setTradeType("sell")}
                          className="flex-1"
                        >
                          Зарах
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Захиалгын төрөл</Label>
                          <Select value={orderType} onValueChange={setOrderType}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="market">Зах зээлийн захиалга</SelectItem>
                              <SelectItem value="limit">Хязгаарлагдмал захиалга</SelectItem>
                              <SelectItem value="stop">Зогсоох захиалга</SelectItem>
                              <SelectItem value="stop-limit">Зогсоох-хязгаарлагдмал</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {orderType !== "market" && (
                          <div className="space-y-2">
                            <Label>Үнэ (USDT)</Label>
                            <Input type="number" placeholder="1250.45" />
                          </div>
                        )}

                        <div className="space-y-2">
                          <Label>Хэмжээ (QTC)</Label>
                          <Input type="number" placeholder="0.00" />
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              25%
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              50%
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              75%
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              100%
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Нийт дүн (USDT)</Label>
                          <Input type="number" placeholder="0.00" readOnly />
                        </div>

                        <Button
                          className={`w-full ${tradeType === "buy" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
                        >
                          {tradeType === "buy" ? "Худалдан авах" : "Зарах"} QTC
                        </Button>
                      </div>
                    </div>

                    {/* Үлдэгдэл */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Үлдэгдэл</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">QTC</p>
                            <p className="text-sm text-muted-foreground">QuantumChain</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">125.8472</p>
                            <p className="text-sm text-muted-foreground">≈ $157,420</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">USDT</p>
                            <p className="text-sm text-muted-foreground">Tether USD</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">25,420.50</p>
                            <p className="text-sm text-muted-foreground">≈ $25,420</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">BTC</p>
                            <p className="text-sm text-muted-foreground">Bitcoin</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">2.5847</p>
                            <p className="text-sm text-muted-foreground">≈ $125,420</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="margin" className="space-y-4">
                  <div className="p-6 text-center border rounded-lg">
                    <Target className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-2">Margin арилжаа</h3>
                    <p className="text-sm text-muted-foreground mb-4">Зээлээр арилжаа хийж илүү их ашиг олох боломж</p>
                    <Button>Margin арилжаа идэвхжүүлэх</Button>
                  </div>
                </TabsContent>

                <TabsContent value="futures" className="space-y-4">
                  <div className="p-6 text-center border rounded-lg">
                    <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-2">Futures арилжаа</h3>
                    <p className="text-sm text-muted-foreground mb-4">Ирээдүйн гэрээгээр арилжаа хийх</p>
                    <Button>Futures арилжаа эхлэх</Button>
                  </div>
                </TabsContent>

                <TabsContent value="options" className="space-y-4">
                  <div className="p-6 text-center border rounded-lg">
                    <Shield className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-2">Options арилжаа</h3>
                    <p className="text-sm text-muted-foreground mb-4">Эрсдэлээс хамгаалах дэвшилтэт хэрэгсэл</p>
                    <Button>Options арилжаа үзэх</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Захиалгын түүх */}
          <Card>
            <CardHeader>
              <CardTitle>Захиалгын түүх</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="open" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="open">Нээлттэй</TabsTrigger>
                  <TabsTrigger value="history">Түүх</TabsTrigger>
                  <TabsTrigger value="fills">Биелэлт</TabsTrigger>
                </TabsList>

                <TabsContent value="open" className="space-y-4">
                  <div className="space-y-2">
                    {[
                      { pair: "QTC/USDT", type: "Limit Buy", amount: "5.0", price: "1245.00", status: "Хүлээгдэж буй" },
                      { pair: "QTC/BTC", type: "Stop Sell", amount: "2.5", price: "0.0280", status: "Хүлээгдэж буй" },
                    ].map((order, i) => (
                      <div key={i} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{order.pair}</span>
                          <Badge variant="secondary">{order.status}</Badge>
                        </div>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className="flex justify-between">
                            <span>{order.type}</span>
                            <span>{order.amount} QTC</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Үнэ:</span>
                            <span>{order.price}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="destructive" className="w-full mt-2">
                          Цуцлах
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                  <div className="space-y-2">
                    {[
                      {
                        pair: "QTC/USDT",
                        type: "Market Buy",
                        amount: "10.0",
                        price: "1250.45",
                        time: "14:30",
                        status: "Биелсэн",
                      },
                      {
                        pair: "QTC/USDT",
                        type: "Limit Sell",
                        amount: "5.0",
                        price: "1255.00",
                        time: "12:15",
                        status: "Биелсэн",
                      },
                    ].map((order, i) => (
                      <div key={i} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{order.pair}</span>
                          <Badge variant="default">{order.status}</Badge>
                        </div>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className="flex justify-between">
                            <span>{order.type}</span>
                            <span>{order.time}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{order.amount} QTC</span>
                            <span>@ {order.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="fills" className="space-y-4">
                  <div className="text-center py-8">
                    <Activity className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground">Биелсэн захиалгууд энд харагдана</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Анхааруулга */}
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-4 md:pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-yellow-600 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-medium text-yellow-800 text-sm md:text-base">Эрсдэлийн анхааруулга</h4>
                <p className="text-xs md:text-sm text-yellow-700">
                  Криптовалют арилжаа нь өндөр эрсдэлтэй үйл ажилгаа юм. Та зөвхөн алдаж болох мөнгөөр арилжаа хийнэ үү.
                  Арилжаа хийхээсээ өмнө бүх эрсдэлийг сайтар судалж, ойлгосон байх шаардлагатай.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
