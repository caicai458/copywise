import { Metadata } from "next";

export const metadata: Metadata = {
  title: "跨境电商卖家如何用 AI 写英文冷邮件（附模板） | ColdCrow",
  description:
    "面向国内跨境电商卖家的英文冷邮件实战指南：怎么写、怎么发、怎么避免进垃圾箱，附可直接套用的模板。",
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-600">
          中文指南
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          跨境电商卖家如何用 AI 写英文冷邮件（附模板）
        </h1>
        <p className="mt-4 text-base text-gray-600">
          做亚马逊、Shopify 和独立站的卖家，找海外 B2B 客户（批发商、买手、经销商）时，一封写得好的英文冷邮件比群发几百封都管用。
        </p>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-gray-700">
        <h2 className="pt-4 text-2xl font-semibold text-gray-900">1. 冷邮件是什么</h2>
        <p>
          冷邮件（Cold Email）是主动发给没有交集的潜在客户的邮件。和群发广告不同，它一对一、个性化、以建立联系为目标。对跨境电商卖家来说，这是联系海外批发商、买手、品牌方最便宜的方式——零广告费，一封邮件直达采购负责人。
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">2. 英文冷邮件的核心结构</h2>
        <p>
          一封能收到回复的冷邮件只有 4 个部分：
        </p>
        <p>
          ① 开头第一句：提到对方公司的具体信息（产品、新闻、招聘），证明你做过功课；<br />
          ② 自我介绍：你是谁、做什么产品、为什么联系他（一句话）；<br />
          ③ 价值主张：你的产品对他有什么好处（价格、质量、交期、差异化）；<br />
          ④ 低负担行动指令：只问一件事（“方便的话回个邮件告诉我是否合适”），不要问一堆问题。
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">3. 附模板：可直接套用</h2>
        <p>
          Subject: Quick question about [他们的产品线/品牌]<br />
          Hi [名字],<br />
          Saw that [他们的具体动作——新上线某产品/在招聘/在某平台开店]。We make [你的产品] and currently supply [你的渠道/客户类型] in [市场]。<br />
          Happy to send samples and pricing if it could be a fit for [他们的品牌/渠道]。<br />
          Either way, appreciate you reading this。<br />
          Best,<br />
          [你的名字]
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">4. 怎么避免进垃圾箱</h2>
        <p>
          用企业邮箱 + 配置 SPF/DKIM/DMARC；每封邮件控制在 120 词以内；一天一个邮箱发 10-30 封，不要猛发；发送前用工具验证对方邮箱是否存在；少放链接、不放附件。
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-gray-900">5. 用 AI 批量写个性化邮件</h2>
        <p>
          把客户的名字、公司和职位告诉 ColdCrow，AI 会在几秒内生成一封个性化英文冷邮件，并给出送达率评分。你只需要复制、检查、发送。省下的是每天 2-3 小时写邮件的时间。
        </p>

        <div className="mt-10 rounded-xl bg-indigo-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            让 AI 帮你写
          </h3>
          <p className="mt-2 text-gray-700">
            输入客户的一句话介绍，ColdCrow 生成个性化英文冷邮件，附带送达率评分。免费试用。
          </p>
          <p className="mt-3 font-medium text-indigo-600">
            在 ColdCrow 免费试用。
          </p>
        </div>
      </div>
    </article>
  );
}
