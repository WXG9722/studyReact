module.exports = {
    'env': {
        // 支持的全局变量
        'browser': true,
        'commonjs': true,
        'amd': true,
        'es6': true
    },
    'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'modules': true
        }
    },
    "parser": "babel-eslint",
    'globals': {
        'DATA': true,
        '$': true,
        'define': true,
        'require': true,
        'Ralert': true,
        'ShowToast': true,
        'TimeMe': true,
        'Tip': true,
        'QunarAPI': true,
        'gw': true
    },
    'plugins': [
        'react',
        "react-hooks"
    ],
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
    'rules': {
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
        // Possible Errors 可能的错误或逻辑错误
        // "comma-dangle": [2, "never"], //要求或禁止末尾逗号 !!!xxx
        // "no-cond-assign": 2, //禁止条件表达式中出现赋值操作符
        // "no-console": 2, // 禁用 console
        'no-constant-condition': 2,
        // 禁止在条件中使用常量表达式
        'no-control-regex': 2,
        // 禁止在正则表达式中使用控制字符
        'no-debugger': 2,
        // 禁用 debugger   !!!
        'no-dupe-keys': 2,
        // 禁止 function 定义中出现重名参数
        'no-empty': 2,
        // 禁止出现空语句块 !!!
        'no-empty-character-class': 2,
        //禁止在正则表达式中使用空字符集 !!!
        'no-ex-assign': 2,
        //禁止对 catch 子句的参数重新赋值
        'no-extra-boolean-cast': 2,
        // 禁止不必要的布尔转换
        'no-extra-parens': 0,
        //禁止不必要的括号 0
        'no-extra-semi': 1,
        // 禁止不必要的分号 !!!
        'no-func-assign': 2,
        // 禁止对 function 声明重新赋值 !!!
        'no-inner-declarations': 2,
        //禁止在嵌套的块中出现变量声明或 function 声明
        'no-invalid-regexp': 2,
        // 禁止 RegExp 构造函数中存在无效的正则表达式字符串// "no-irregular-whitespace": 2, // 禁止在字符串和注释之外不规则的空白
        'no-obj-calls': 2,
        //禁止把全局对象作为函数调用
        'no-regex-spaces': 2,
        // 要求对象字面量属性名称使用引号
        'no-sparse-arrays': 2,
        //禁用稀疏数组, 逗号之前没有任何元素的数组
        'no-unreachable': 2,
        //禁止在return、throw、continue 和 break 语句之后出现不可达代码 !!!
        'use-isnan': 2,
        // 要求使用 isNaN() 检查 NaN
        'valid-jsdoc': 0,
        // 强制使用有效的 JSDoc 注释
        'valid-typeof': 2,
        //强制 typeof 表达式与有效的字符串进行比较

        // Best Practices // 最佳实践

        'block-scoped-var': 2,
        // 强制把变量的使用限制在其定义的作用域范围内
        'complexity': 0,
        //指定程序中允许的最大环路复杂度 http://eslint.cn/docs/rules/complexity
        // "consistent-return": 2,// 要求 return 语句要么总是指定返回的值，要么不指定
        'curly': 2,
        // 强制所有控制语句使用一致的括号风格 if(a){}  if(a)  !!!
        'default-case': 2,
        // 要求 switch 语句中有 default 分支
        // "dot-notation": 2, //强制在点号之前和之后一致的换行
        'eqeqeq': 2,
        //要求使用 === 和 !==  !!!
        'guard-for-in': 2,
        //要求 for-in 循环中有一个 if 语句
        'no-alert': 2,
        'no-caller': 2,
        //禁用 arguments.caller 或 arguments.callee
        'no-div-regex': 2,
        //禁止除法操作符显式的出现在正则表达式开始的位置 http://eslint.cn/docs/rules/no-div-regex
        'no-else-return': 2,
        //禁止 if 语句中 return 语句之后有 else 块 http://eslint.cn/docs/rules/no-else-return
        'no-eq-null': 2,
        //禁止在没有类型检查操作符的情况下与 null 进行比较 a != null || a == null
        // "no-eval": 2, //禁用 eval()
        'no-extend-native': 2,
        //禁止扩展原生类型 http://eslint.cn/docs/rules/no-extend-native
        'no-extra-bind': 2,
        //禁止不必要的函数绑定 http://eslint.cn/docs/rules/no-extra-bind
        'no-fallthrough': 2,
        // 禁止 case 语句落空 每个 case 语句中都要以 throw、return、break或者注释作为结束
        'no-floating-decimal': 2,
        //禁止数字字面量中使用前导和末尾小数点 .5
        'no-implied-eval': 2,
        //禁止使用类似 eval() 的方法 setTimeout("alert("Hi!");", 100);
        'no-iterator': 2,
        //禁用 __iterator__ 属性 http://eslint.cn/docs/rules/no-iterator
        'no-labels': 2,
        //禁用标签语句
        'no-lone-blocks': 2,
        //禁用不必要的嵌套块
        'no-loop-func': 2,
        //禁止在循环中出现 function 声明和表达式
        'no-multi-spaces': 2,
        //禁止使用多个空格
        'no-multi-str': 0,
        //禁止使用多行字符串 0 12121212121212


        'no-native-reassign': 2,
        //禁止对 function 的参数进行重新赋值 http://eslint.cn/docs/rules/no-param-reassign
        'no-new': 2,
        //	禁止在非赋值或条件语句中使用 new 操作符
        'no-new-func': 2,
        //禁止对 Function 对象使用 new 操作符
        'no-new-wrappers': 2,
        //禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-octal': 2,
        //禁用八进制字面量
        'no-octal-escape': 2,
        //禁止在字符串中使用八进制转义序列
        'no-process-env': 0,
        //禁用 process.env Node.js 中的 process.env 对象用于存储部署或配置参数
        'no-proto': 2,
        //禁用 __proto__ 属性
        'no-redeclare': 2,
        //禁止多次声明同一变量
        'no-return-assign': 2,
        //禁止在 return 语句中使用赋值语句
        'no-script-url': 2,
        //禁止使用 javascript: url
        'no-self-compare': 2,
        //	禁止自身比较
        'no-sequences': 2,
        //禁用逗号操作符  http://eslint.cn/docs/rules/no-sequences
        'no-unused-expressions': 2,
        //禁止出现未使用过的表达式
        'no-void': 0,
        //禁用 void 操作符
        'no-warning-comments': 1,
        //禁止在注释中使用特定的警告术语{ "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }
        'no-with': 2,
        // 禁用 with 语句
        'radix': 0,
        //强制在parseInt()使用基数参数 parseInt(11,10) xxx
        'vars-on-top': 0,
        // 要求所有的 var 声明出现在它们所在的作用域顶部
        'wrap-iife': 2,
        //要求 IIFE 使用括号括起来 需要把立即执行的函数包裹起来 http://eslint.cn/docs/rules/wrap-iife
        'yoda': 0,
        //要求或禁止 “Yoda” 条件
        // Strict Mode
        'strict': [
            2,
            'global'
        ],
        //要求或禁止使用严格模式指令
        // Variables
        'no-catch-shadow': 2,
        //禁止 catch 子句的参数与外层作用域中的变量同名 !!!
        'no-delete-var': 2,
        //禁止删除变量
        'no-label-var': 2,
        //不允许标签与变量同名 !!!
        'no-shadow': 2,
        //禁止变量声明与外层作用域的变量同名 !!!
        'no-shadow-restricted-names': 2,
        //禁止覆盖受限制的标识符 关键字不能被遮蔽  !!!
        'no-undef': 2,
        //禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'no-undef-init': 2,
        //禁止将变量初始化为 undefined
        'no-undefined': 2,
        //禁止将 undefined 作为标识符
        'no-unused-vars': 2,
        //禁止出现未使用过的变量 !!!
        'no-use-before-define': 1,
        //禁止在变量定义之前使用它们 !!!
        // Stylistic Issues
        'indent': [
            2,
            4,
            {
                // 强制使用一致的缩进 http://eslint.cn/docs/rules/indent
                'SwitchCase': 1
            }
        ],
        'brace-style': 2,
        //强制在代码块中使用一致的大括号风格 !!!
        'camelcase': 0,
        // 强制使用驼峰命名约定 !!!
        'comma-spacing': 2,
        // 强制在逗号前后使用一致的空格!!! 第一种
        'comma-style': 2,
        // 强制使用一致的逗号风格  !!! 全是末位
        'consistent-this': 1,
        //当获取当前执行环境的上下文时，强制使用一致的命名 self
        'eol-last': 2,
        //要求或禁止文件末尾存在空行
        'func-names': 0,
        // 要求或禁止使用命名的 function 表达式 00000
        'func-style': 0,
        // 强制一致地使用 function 声明或表达式 00000
        'key-spacing': [
            2,
            {
                //强制在对象字面量的属性中键和值之间使用一致的间距 http://eslint.cn/docs/rules/key-spacing !!!
                'beforeColon': false,
                //a = {"ff": 11}
                'afterColon': true
            }
        ],
        'max-nested-callbacks': 0,
        //强制回调函数最大嵌套深度 00000
        'new-cap': 2,
        //要求构造函数首字母大写 !!!
        'new-parens': 2,
        //要求调用无参构造函数时有圆括号 new Person() !!!
        'no-array-constructor': 2,
        //禁用 Array 构造函数 由于单参数的陷阱，和全局范围的 Array 可能被重定义，通常不允许使用 Array的构造函数来创建数组 !!!
        'no-inline-comments': 0,
        //禁止在代码后使用内联注释   000000
        'no-lonely-if': 2,
        //禁止 if 作为唯一的语句出现在 else 语句中
        'no-mixed-spaces-and-tabs': 0,
        //禁止空格和tab的混合缩进
        'no-nested-ternary': 0,
        //禁用嵌套的三元表达式
        'no-new-object': 2,
        //禁用 Object 的构造函数
        'semi-spacing': [
            2,
            {
                //强制分号之前和之后使用一致的空格
                'before': false,
                'after': true
            }
        ],
        'no-ternary': 0,
        //禁用三元操作符
        'no-trailing-spaces': 2,
        //禁用行尾空格 !!!
        'no-multiple-empty-lines': 2,
        //禁止出现多行空行
        'no-underscore-dangle': 0,
        //禁止标识符中有悬空下划线
        'one-var': 0,
        // 强制函数中的变量要么一起声明要么分开声明
        'operator-assignment': 0,
        // 要求或禁止在可能的情况下使用简化的赋值操作符
        'padded-blocks': 0,
        //要求或禁止块内填充
        'quotes': [
            1,
            'single'
        ],
        // 强制使用一致的反勾号、双引号或单引号
        'quote-props': [
            2,
            'as-needed'
        ],
        //全加或者全部加	要求对象字面量属性名称用引号括起来 http://eslint.cn/docs/rules/quote-props
        'semi': [
            2,
            'always'
        ],
        //要求或禁止使用分号而不是 ASI
        'sort-vars': 0,
        // 要求同一个声明块中的变量按顺序排列
        'space-before-blocks': 2,
        //再看 强制在块之前使用一致的空格
        'object-curly-spacing': [
            2,
            'never'
        ],
        //看一眼大家的格式化 强制在大括号中使用一致的空格
        'array-bracket-spacing': [
            2,
            'never'
        ],
        // 强制数组方括号中使用一致的空格
        'space-in-parens': 2,
        // 强制在圆括号内使用一致的空格
        'space-infix-ops': 2,
        // 要求操作符周围有空格
        'space-unary-ops': 2,
        // 强制在一元操作符前后使用一致的空格
        'spaced-comment': 2,
        // 要求或禁止在注释前有空白 (space 或 tab) (spaced-comment)
        'wrap-regex': 0,
        //要求正则表达式被括号括起来  00000
        // Legacy
        'max-len': [
            2,
            150
        ],
        // 强制一行的最大长度
        'max-params': 0,
        // 强制函数定义中最多允许的参数数量 000000
        'max-statements': 0,
        // 强制函数块最多允许的的语句数量
        'no-plusplus': 0,
        // 禁用一元操作符 ++ 和 -- 00000

        //React
        // Specify whether double or single quotes should be used in JSX attributes
        // http://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [
            2,
            'prefer-double'
        ],
        // Forbid certain propTypes (any, array, object)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        'react/forbid-prop-types': [
            2,
            {
                'forbid': [
                    'any',
                    'array',
                    'object'
                ]
            }
        ],
        // Enforce boolean attributes notation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': [
            2,
            'never'
        ],
        // !!!!<Hello personal /> // bool类型 !!!

        // Validate closing bracket location in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': [
            2,
            'line-aligned'
        ],
        // <Hello ！！！
        //   firstName="John"
        //	  lastName="Smith"
        //  />;

        // Enforce or disallow spaces inside of curly braces in JSX attributes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': [
            2,
            'never',
            {
                'allowMultiline': true
            }
        ],
        // 花括号类型

        // Enforce event handler naming conventions in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        'react/jsx-handler-names': [
            0,
            {
                'eventHandlerPrefix': 'handle',
                'eventHandlerPropPrefix': 'on'
            }
        ],
        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': [
            2,
            4
        ],
        //  !!!!! props缩进

        // Validate JSX has key prop when in array or iterator
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': 0,
        // 给array或iterator加key!!!！

        // Limit maximum of props on a single line in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        // TODO: enable (semver-minor)
        'react/jsx-max-props-per-line': [
            0,
            {
                'maximum': 1,
                'when': 'multiline'
            }
        ],
        // ！！！单行只有一个props

        // Prevent usage of .bind() in JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        // TODO 是否需要禁止bind和箭头函数
        'react/jsx-no-bind': [
            2,
            {
                'ignoreRefs': true,
                'allowArrowFunctions': true,
                'allowBind': false
            }
        ],
        // Prevent duplicate props in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': [
            2,
            {
                'ignoreCase': true
            }
        ],
        //!!!不能出现重复的props

        // Prevent usage of unwrapped JSX strings
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        'react/jsx-no-literals': 0,
        //!!!<div>test</div> => <div>{"test"}</div>

        // Disallow undeclared variables in JSX 禁止没有定义的变量
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        'react/jsx-no-undef': 2,
        // !!!

        // Enforce PascalCase for user-defined JSX components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        'react/jsx-pascal-case': [
            2,
            {
                // ！！！组件名驼峰
                'allowAllCaps': true,
                'ignore': []
            }
        ],
        // Enforce propTypes declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        'react/sort-prop-types': [
            0,
            {
                'ignoreCase': true,
                'callbacksLast': false,
                'requiredFirst': false
            }
        ],
        // Prevent React to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        'react/jsx-uses-react': [
            2
        ],
        //!!!!!

        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': 2,
        // !!!! 定义了没有用

        // Prevent usage of dangerous JSX properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        'react/no-danger': 0,
        // dangerouslySetInnerHTML={{_html:"xxx"}}  warnning

        // Prevent usage of deprecated methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        'react/no-deprecated': [
            2
        ],
        // 使用弃用的方法

        // Prevent usage of setState in componentDidMount
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        'react/no-did-mount-set-state': [
            2
        ],
        // setState in componentDidMount  warnning  !!!

        // Prevent usage of setState in componentDidUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        'react/no-did-update-set-state': [
            2
        ],
        // Prevent direct mutation of this.state
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        'react/no-direct-mutation-state': 2,
        // 直接修改this.state,而不是使用this.setState

        // Prevent usage of isMounted
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        'react/no-is-mounted': 2,
        // isMounted在es6中不能使用

        // Prevent multiple component definition per file
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        'react/no-multi-comp': [
            2,
            {
                'ignoreStateless': true
            }
        ],
        // 单个文件中只有一个定义的组件

        // Prevent usage of setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
        'react/no-set-state': 0,
        // 不使用setState  关闭！！！

        // Prevent using string references
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        'react/no-string-refs': 2,
        // 不要使用字符串的refs，使用this.dom !!!

        // Prevent usage of unknown DOM property
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        'react/no-unknown-property': 2,
        // 不允许未知的 DOM 属性

        // Require ES6 class declarations over React.createClass
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        'react/prefer-es6-class': [
            2,
            'always'
        ],
        // Require stateless functions when not using lifecycle methods, setState or ref
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        'react/prefer-stateless-function': 0,
        // 没有使用生命周期方法


        // Prevent missing React when using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        'react/react-in-jsx-scope': 2,
        // Restrict file extensions that may be required
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
        // deprecated in favor of import/extensions
        'react/require-extension': [
            0,
            {
                'extensions': [
                    '.jsx',
                    '.js'
                ]
            }
        ],
        // Require render() methods to return something
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
        'react/require-render-return': 2,
        // render return

        // Prevent extra closing tags for components without children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/self-closing-comp': 2,
        // 组件的children为空，不能添加封闭标签 ！！！！

        // Enforce spaces before the closing bracket of self-closing JSX elements
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
        'react/jsx-space-before-closing': [
            2,
            'always'
        ],
        // 组件关闭标签前面有空格

        // Enforce component methods order
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        'react/sort-comp': [
            2,
            {
                'order': [
                    'static-methods',
                    'lifecycle',
                    '/^on.+$/',
                    '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                    'everything-else',
                    '/^render.+$/',
                    'render'
                ]
            }
        ],
        // Prevent missing parentheses around multilines JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': [
            2,
            {
                'declaration': true,
                'assignment': true,
                'return': true
            }
        ],
        // Require that the first prop in a JSX element be on a new line when the element is multiline
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': [
            2,
            'multiline'
        ],
        // 第一个props第一行还是另起一行

        // Enforce spacing around jsx equals signs
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': [
            2,
            'never'
        ],
        // props的 = 两侧没有空格

        // Enforce JSX indentation
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': [
            2,
            4
        ],
        //子组件的缩进

        // Disallow target="_blank" on links
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
        'react/jsx-no-target-blank': 2,
        // 没有_blank

        // prevent accidental JS comments from being injected into JSX as text
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
        'react/jsx-no-comment-textnodes': 0,
        'react/no-comment-textnodes': 0,
        // deprecated version

        // disallow using React.render/ReactDOM.render"s return value
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
        'react/no-render-return-value': 2,
        // require a shouldComponentUpdate method, or PureRenderMixin
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
        'react/require-optimization': [
            0,
            {
                'allowDecorators': []
            }
        ],
        // warn against using findDOMNode()
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
        'react/no-find-dom-node': 0,
        // 不能使用findDOMNode

        // Forbid certain props on Components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        'react/forbid-component-props': [
            0,
            {
                'forbid': []
            }
        ],
        // 不能在组件上添加 className或style属性  关闭！！！

        // Prevent problem with children and props.dangerouslySetInnerHTML
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
        'react/no-danger-with-children': 2,
        // dangerouslySetInnerHTML,不能直接添加children，先定义dangerouslySetInnerHTML的组件，再在组件里面添加children

        // Prevent unused propType definitions
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
        'react/no-unused-prop-types': [
            2,
            {
                'customValidators': [],
                'skipShapeProps': true
            }
        ],
        // Require style prop value be an object or var
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
        'react/style-prop-object': 2,
        // style是个对象

        // Prevent invalid characters from appearing in markup
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        'react/no-unescaped-entities': 2,
        // ">", &gt;  {">"}

        // Prevent passing of children as props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
        'react/no-children-prop': 2,
        // 不要使用children作为一个属性，使用父组件包裹子组件来传入chlidren


        // Prevent usage of Array index in keys
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        'react/no-array-index-key': 2,
        // Enforce a defaultProps definition for every prop that is not a required prop
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        'react/require-default-props': 2,
        'react/forbid-elements': [
            0,
            {
                'forbid': []
            }
        ],
        // Forbids using non-exported propTypes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
        'react/forbid-foreign-prop-types': 0,
        // Prevent void DOM elements from receiving children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
        // TODO: enable (semver-minor)
        'react/void-dom-elements-no-children': 0,
        /* eslint-disable import/first */
    }
};