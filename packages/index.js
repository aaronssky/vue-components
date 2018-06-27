import WButton from './button/index.js';
import YcfImage from './image/index.js';

const components = [
    WButton,
    YcfImage,
]

const install = function(Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
        // MetaInfo.install(Vue)
        // Vue.prototype.$loading = WLoadingBar
}

// 打包出的js文件，加载后自动执行vue.use
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    // WButton,
    // YcfImage,
}
