"use client"

import { useState } from "react"
import {
  Copy,
  Send,
  Download,
  Upload,
  Shield,
  Key,
  Wallet,
  QrCode,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  EyeOff,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function WalletPage() {
  const [walletAddress] = useState("0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4")
  const [balance] = useState(125.8472)
  const [showPrivateKey, setShowPrivateKey] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState("QTC")

  const walletBalances = [
    { symbol: "QTC", name: "QuantumChain", balance: 125.8472, usdValue: 157420.5, change: +5.2 },
    { symbol: "BTC", name: "Bitcoin", balance: 2.5847, usdValue: 125420.0, change: +2.1 },
    { symbol: "ETH", name: "Ethereum", balance: 15.2456, usdValue: 45850.3, change: -1.5 },
    { symbol: "USDT", name: "Tether USD", balance: 25420.5, usdValue: 25420.5, change: 0.0 },
    { symbol: "BNB", name: "Binance Coin", balance: 45.892, usdValue: 18520.8, change: +3.8 },
  ]

  const transactionHistory = [
    {
      type: "Хүлээн авах",
      amount: "+50.0 QTC",
      from: "0x8765...4321",
      time: "2 цаг өмнө",
      status: "Баталгаажсан",
      hash: "0xabc123...",
    },
    {
      type: "Илгээх",
      amount: "-25.5 QTC",
      to: "0x1234...5678",
      time: "5 цаг өмнө",
      status: "Баталгаажсан",
      hash: "0xdef456...",
    },
    {
      type: "Staking шагнал",
      amount: "+3.25 QTC",
      from: "Validator #3",
      time: "1 өдөр өмнө",
      status: "Баталгаажсан",
      hash: "0xghi789...",
    },
    {
      type: "DeFi урамшуулал",
      amount: "+1.85 QTC",
      from: "Liquidity Pool",
      time: "2 өдөр өмнө",
      status: "Баталгаажсан",
      hash: "0xjkl012...",
    },
    {
      type: "NFT худалдаа",
      amount: "-15.0 QTC",
      to: "NFT Marketplace",
      time: "3 өдөр өмнө",
      status: "Баталгаажсан",
      hash: "0xmno345...",
    },
  ]

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Квант хэтэвч</h1>
          <p className="text-muted-foreground">Постквант хамгаалалттай цифр хэтэвч</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Постквант хамгаалалттай
          </Badge>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Хэтэвч нэмэх
          </Button>
        </div>
      </div>

      {/* Хэтэвчийн тойм */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Хэтэвчийн тойм
            </CardTitle>
            <CardDescription>Dilithium/Kyber шифрлэлтэй квант тэсвэртэй хэтэвч</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Хэтэвчийн хаяг</Label>
              <div className="flex items-center gap-2">
                <Input value={walletAddress} readOnly className="font-mono text-sm" />
                <Button size="icon" variant="outline">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <QrCode className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Нийт үлдэгдэл</Label>
                <p className="text-3xl font-bold">{balance.toFixed(4)} QTC</p>
                <p className="text-sm text-muted-foreground">≈ ${(balance * 1250).toLocaleString()}</p>
              </div>
              <div className="space-y-2">
                <Label>Өнөөдрийн өөрчлөлт</Label>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                  <p className="text-2xl font-bold text-green-600">+5.2%</p>
                </div>
                <p className="text-sm text-muted-foreground">+$8,250.30</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <Button className="flex-col h-auto py-4 gap-2">
                <Send className="h-5 w-5" />
                <span>Илгээх</span>
              </Button>
              <Button variant="outline" className="flex-col h-auto py-4 gap-2">
                <Download className="h-5 w-5" />
                <span>Хүлээн авах</span>
              </Button>
              <Button variant="outline" className="flex-col h-auto py-4 gap-2">
                <Upload className="h-5 w-5" />
                <span>Staking</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Хамгаалалтын статус */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Хамгаалалтын статус
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Dilithium гарын үсэг</span>
                <Badge variant="default">Идэвхтэй</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Kyber шифрлэл</span>
                <Badge variant="default">Идэвхтэй</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">JWT баталгаажуулалт</span>
                <Badge variant="default">Хүчинтэй</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Hardware хамгаалалт</span>
                <Badge variant="secondary">Сонголттой</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Биометрик хамгаалалт</span>
                <Badge variant="secondary">Идэвхгүй</Badge>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-medium mb-3">Хувийн түлхүүр</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    type={showPrivateKey ? "text" : "password"}
                    value="••••••••••••••••••••••••••••••••"
                    readOnly
                    className="font-mono text-xs"
                  />
                  <Button size="icon" variant="outline" onClick={() => setShowPrivateKey(!showPrivateKey)}>
                    {showPrivateKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Хувийн түлхүүрээ хэзээ ч хуваалцаж болохгүй</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Хөрөнгийн жагсаалт */}
      <Card>
        <CardHeader>
          <CardTitle>Хөрөнгийн жагсаалт</CardTitle>
          <CardDescription>Таны бүх криптовалют хөрөнгө</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {walletBalances.map((asset, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="font-bold text-sm">{asset.symbol.slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{asset.symbol}</p>
                    <p className="text-sm text-muted-foreground">{asset.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {asset.balance.toFixed(4)} {asset.symbol}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">${asset.usdValue.toLocaleString()}</p>
                    <Badge variant={asset.change >= 0 ? "default" : "destructive"} className="text-xs">
                      {asset.change >= 0 ? "+" : ""}
                      {asset.change}%
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Хэтэвчийн үйл ажилгаа */}
      <Card>
        <CardHeader>
          <CardTitle>Хэтэвчийн үйл ажилгаа</CardTitle>
          <CardDescription>Илгээх, хүлээн авах, staking хийх</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="send" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="send">Илгээх</TabsTrigger>
              <TabsTrigger value="receive">Хүлээн авах</TabsTrigger>
              <TabsTrigger value="stake">Staking</TabsTrigger>
              <TabsTrigger value="history">Түүх</TabsTrigger>
            </TabsList>

            <TabsContent value="send" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Хүлээн авагчийн хаяг</Label>
                    <Input id="recipient" placeholder="0x..." className="font-mono" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Валют</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="QTC">QTC - QuantumChain</option>
                      <option value="BTC">BTC - Bitcoin</option>
                      <option value="ETH">ETH - Ethereum</option>
                      <option value="USDT">USDT - Tether USD</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Дүн</Label>
                    <Input id="amount" type="number" placeholder="0.00" />
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
                        Max
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gas">Сүлжээний төлбөр</Label>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Удаан
                      </Button>
                      <Button size="sm" variant="default" className="flex-1">
                        Стандарт
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Хурдан
                      </Button>
                    </div>
                    <Input id="gas" value="0.001 QTC" readOnly />
                  </div>
                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Гүйлгээ илгээх
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Гүйлгээний дэлгэрэнгүй</h4>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Илгээх дүн:</span>
                      <span className="font-medium">0.00 QTC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Сүлжээний төлбөр:</span>
                      <span className="font-medium">0.001 QTC</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-medium">Нийт дүн:</span>
                      <span className="font-medium">0.001 QTC</span>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-medium mb-2">Хамгаалалтын онцлог</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Постквант шифрлэл</li>
                      <li>• Олон гарын үсэг шаардлага</li>
                      <li>• Гүйлгээний баталгаажуулалт</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="receive" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <QrCode className="mx-auto h-16 w-16 mb-4" />
                      <p className="text-sm text-muted-foreground">QR код</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Таны хэтэвчийн хаяг</Label>
                    <div className="flex items-center gap-2">
                      <Input value={walletAddress} readOnly className="font-mono text-sm" />
                      <Button size="icon" variant="outline">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Хүлээн авах заавар</h4>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium mb-1">1. Хаягийг хуулах</p>
                      <p className="text-muted-foreground">Дээрх хаягийг хуулж илгээгчид өгнө үү</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium mb-1">2. QR код ашиглах</p>
                      <p className="text-muted-foreground">Мобайл аппаар QR кодыг уншуулна уу</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium mb-1">3. Сүлжээ шалгах</p>
                      <p className="text-muted-foreground">QuantumChain сүлжээ ашиглаж байгааг баталгаажуулна уу</p>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Анхааруулга:</strong> Зөвхөн QuantumChain сүлжээний хөрөнгийг энэ хаяг руу илгээнэ үү.
                      Бусад сүлжээний хөрөнгө илгээвэл алдагдах магадлалтай.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stake" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="validator">Validator сонгох</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Validator #1 (15.2% APY)</option>
                      <option>Validator #2 (14.8% APY)</option>
                      <option>Validator #3 (12.8% APY)</option>
                      <option>Validator #7 (18.5% APY)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stake-amount">Staking дүн (QTC)</Label>
                    <Input id="stake-amount" type="number" placeholder="0.00" />
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        10 QTC
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        50 QTC
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        100 QTC
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Тооцоолсон жилийн шагнал: <span className="font-medium text-green-600">15.2 QTC</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Хамгийн бага staking хугацаа: 7 хоног</p>
                  </div>
                  <Button className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Staking эхлэх
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Одоогийн staking</h4>
                  <div className="space-y-3">
                    {[
                      { validator: "Validator #1", amount: "75.0 QTC", rewards: "1.56 QTC", apy: "15.2%" },
                      { validator: "Validator #3", amount: "50.0 QTC", rewards: "0.78 QTC", apy: "12.8%" },
                    ].map((stake, i) => (
                      <div key={i} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium">{stake.validator}</span>
                          <Badge variant="default">Идэвхтэй</Badge>
                        </div>
                        <Progress value={75 - i * 25} className="mb-3" />
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <p className="text-muted-foreground">Staking</p>
                            <p className="font-medium">{stake.amount}</p>
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
                        <Button size="sm" variant="outline" className="w-full mt-3">
                          Unstake хийх
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Input placeholder="Гүйлгээ хайх..." className="flex-1" />
                  <Button variant="outline">Шүүлтүүр</Button>
                  <Button variant="outline">Экспорт</Button>
                </div>

                <div className="space-y-3">
                  {transactionHistory.map((tx, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-2 rounded-full ${
                            tx.amount.startsWith("+") ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                          }`}
                        >
                          {tx.amount.startsWith("+") ? (
                            <ArrowDownRight className="h-4 w-4" />
                          ) : (
                            <ArrowUpRight className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{tx.type}</p>
                          <p className="text-sm text-muted-foreground">
                            {tx.to ? `Хүлээн авагч: ${tx.to}` : `Илгээгч: ${tx.from}`}
                          </p>
                          <p className="text-xs text-muted-foreground">Hash: {tx.hash}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${tx.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                          {tx.amount}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="default">{tx.status}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{tx.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center py-4">
                  <Button variant="outline">Илүү ачаалах</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
