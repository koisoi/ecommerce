/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: false,
    transpilePackages: ["mui-tel-input"],
    // static files
    // output: "export",
    // trailingSlash: true,

    // not recommended (https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout)
    // remove after ssr
    // experimental: {
    //     missingSuspenseWithCSRBailout: false
    // },

    // async rewrites() {
    //     return [
    //         {
    //             source: "/catalog/:category/*",
    //             destination: "/catalog/:category/*" // Matched parameters can be used in the destination
    //         }
    //     ];
    // },

    // output: "standalone",

    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.(".svg")
        );

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/ // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: {
                    not: [...fileLoaderRule.resourceQuery.not, /url/]
                }, // exclude if *.svg?url
                use: ["@svgr/webpack"]
            }
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i;

        return {
            ...config
        };
    }
    // ...other config
};
