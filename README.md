# 🌐 Static Website Deployment with Next.js, AWS, and GitHub Actions

A production-ready static website pipeline using **Next.js**, hosted on **Amazon S3**, distributed globally with **CloudFront**, secured with **SSL (ACM)**, and deployed continuously via **GitHub Actions**.

---

## 🔧 Tech Stack

* **Frontend**: Next.js 15
* **Hosting**: Amazon S3 (Static Website Hosting)
* **CDN + HTTPS**: Amazon CloudFront + ACM
* **CI/CD**: GitHub Actions
* **DNS**: Cloudflare

---

## 📁 Project Structure

```bash
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── out/                          # Static site output (after build)
├── next.config.js               # Next.js config for static export
├── package.json
└── README.md
```

---

## 🚀 Deployment Steps

### 1. **Build Static Site**

```bash
npm run build
```

> Generates static files in the `out/` directory using Next.js static export.

### 2. **Manual S3 Upload (Optional)**

If testing before CI/CD:

* Create S3 bucket (e.g., `static-site`) with static website hosting
* Upload contents of `out/`
* Set permissions and default root object to `index.html`

### 3. **CloudFront + SSL**

* Create a CloudFront distribution pointing to your S3 bucket
* Request a certificate in ACM
* Validate via DNS in Cloudflare
* Set default root object to `index.html`

### 4. **Cloudflare Domain Setup**

* Add CNAME record pointing to CloudFront domain
* Set to DNS-only (disable proxy to avoid redirect loops)

### 5. **GitHub Actions Deployment**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to S3

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build

      - uses: jakejarvis/s3-sync-action@v0.5.1
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: 'ap-southeast-2'
          SOURCE_DIR: 'out'
```

> Store AWS credentials and bucket name securely in GitHub secrets.

---

## ✅ Results

* 🌍 Website live at `https://richardnam.dev`
* 🔐 Fully HTTPS-enabled with SSL certificate
* 🔁 Automated deployments on `git push`

---

## 🧠 Skills Demonstrated

* AWS service integration (S3, CloudFront, ACM, IAM)
* Static site generation and export with Next.js
* GitHub Actions CI/CD workflow design
* DNS and SSL configuration via Cloudflare

---

## 📌 Next Steps

* Add staging environment with separate bucket
* Monitor performance via AWS CloudWatch
* Extend with contact form via AWS Lambda or external API
