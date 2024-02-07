import * as esbuild from 'esbuild';
import stylePlugin from 'esbuild-style-plugin'

esbuild.build({
    bundle: true,
    outdir: './dist',
    entryPoints: ['./src/lib/index.styl'],
    entryNames: "nanarinostyl.min",
    minify: true,
    plugins: [
        stylePlugin()
    ],
}).then((res) => {
    console.log('Build complete', res);
}).catch((e) => {
    console.log('Errors', e);
});