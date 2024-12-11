const questions = [
    // 基本信息（2题）
    {
        id: 1,
        type: 'basic',
        text: '你的性别是？',
        options: ['男', '女'],
        weight: 0  // 基本信息不计入评分
    },
    {
        id: 2,
        type: 'basic',
        text: '你的年龄范围是？',
        options: ['18-25岁', '26-30岁', '31-35岁', '36岁以上'],
        weight: 0
    },

    // 性格测评（6题）
    {
        id: 3,
        type: 'personality',
        text: '遇到困难时，你希望另一半如何做？',
        options: ['主动帮我解决', '给我鼓励支持', '一起商量对策', '给我独立空间'],
        weight: 1
    },
    {
        id: 4,
        type: 'personality',
        text: '恋爱中遇到分歧，你会？',
        options: ['主动沟通', '等对方主动', '自己思考', '寻求建议'],
        weight: 1
    },
    {
        id: 5,
        type: 'personality',
        text: '你期望的约会方式是？',
        options: ['浪漫惊喜', '平淡温馨', '户外冒险', '居家休闲'],
        weight: 1
    },
    {
        id: 6,
        type: 'personality',
        text: '对方忙于工作没时间陪你，你会？',
        options: ['理解支持', '适度抱怨', '找事做', '要求改变'],
        weight: 1
    },
    {
        id: 7,
        type: 'personality',
        text: '你认为恋爱中最重要的是？',
        options: ['真诚沟通', '互相理解', '共同成长', '保持新鲜'],
        weight: 1
    },
    {
        id: 8,
        type: 'personality',
        text: '你更看重对方的哪个方面？',
        options: ['性格品质', '三观契合', '能力才华', '外在条件'],
        weight: 1
    },

    // 价值观（4题）
    {
        id: 9,
        type: 'values',
        text: '你理想的感情发展节奏是？',
        options: ['循序渐进', '水到渠成', '把握当下', '顺其自然'],
        weight: 2
    },
    {
        id: 10,
        type: 'values',
        text: '你期望的另一半年收入是？',
        options: ['10万以下', '10-20万', '20-50万', '50万以上'],
        weight: 2
    },
    {
        id: 11,
        type: 'values',
        text: '你对未来生活的规划是？',
        options: ['买房定居', '环球旅行', '创业发展', '随遇而安'],
        weight: 2
    },
    {
        id: 12,
        type: 'values',
        text: '你对孩子的规划是？',
        options: ['要孩子', '不要孩子', '再商量', '顺其自然'],
        weight: 2
    },

    // 生活习惯（3题）
    {
        id: 13,
        type: 'lifestyle',
        text: '你期望的约会频率是？',
        options: ['每天见面', '每周几次', '偶尔见面', '看心情'],
        weight: 1
    },
    {
        id: 14,
        type: 'lifestyle',
        text: '恋爱时你的消费观是？',
        options: ['AA制为主', '男方为主', '女方为主', '看情况'],
        weight: 1
    },
    {
        id: 15,
        type: 'lifestyle',
        text: '你能接受异地恋吗？',
        options: ['完全接受', '短期可以', '尽量避免', '不能接受'],
        weight: 1
    },

    // MBTI测试题 (8题)
    {
        id: 16,
        type: 'mbti',
        dimension: 'EI',
        text: '在社交场合中，你更倾向于：',
        options: ['主动与陌生人交谈', '和熟人待在一起', '独自观察他人', '尽快离开'],
        weight: 1
    },
    {
        id: 17,
        type: 'mbti',
        dimension: 'SN',
        text: '做决定时，你更依赖：',
        options: ['具体的事实和数据', '过往的经验', '直觉和感受', '未来的可能性'],
        weight: 1
    },
    {
        id: 18,
        type: 'mbti',
        dimension: 'TF',
        text: '面对冲突时，你会：',
        options: ['分析利弊得失', '考虑他人感受', '寻求共识', '避免冲突'],
        weight: 1
    },
    {
        id: 19,
        type: 'mbti',
        dimension: 'JP',
        text: '你的工作方式更倾向于：',
        options: ['制定详细计划', '灵活随机应变', '边做边调整', '追求完美'],
        weight: 1
    },
    
    // 依恋类型测试题 (4题)
    {
        id: 20,
        type: 'attachment',
        text: '当伴侣需要独处空间时，你会：',
        options: ['感到不安和担忧', '理解并给予空间', '完全不在意', '生气或失落'],
        weight: 1
    },
    {
        id: 21,
        type: 'attachment',
        text: '在亲密关系中，你更害怕：',
        options: ['失去对方', '失去自我', '保持现状', '太过亲密'],
        weight: 1
    },
    {
        id: 22,
        type: 'attachment',
        text: '遇到问题时，你会：',
        options: ['立即寻求伴侣帮助', '自己独立解决', '逃避问题', '纠结很久'],
        weight: 1
    },
    {
        id: 23,
        type: 'attachment',
        text: '对于感情，你的态度是：',
        options: ['渴望亲密关系', '保持适度距离', '享受独处时光', '随遇而安'],
        weight: 1
    }
];

export default questions; 