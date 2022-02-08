FROM public.ecr.aws/lambda/nodejs:14

RUN curl -L https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox-0.12.6-1.amazonlinux2.x86_64.rpm > wk.rpm \
  && yum install -y wk.rpm \
  && rm wk.rpm \
  && yum clean all

RUN npm install -g yarn
COPY package.json yarn.lock ${LAMBDA_TASK_ROOT}
RUN yarn install

COPY handler.js ${LAMBDA_TASK_ROOT}

CMD ["handler.generate_pdf"]