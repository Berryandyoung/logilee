FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
    libreoffice-calc python3-flask python3-defusedxml gunicorn \
    fonts-noto-core fonts-noto-cjk fonts-liberation fontconfig \
    && rm -rf /var/lib/apt/lists/* \
    && useradd --uid 10001 --create-home converter
COPY fonts.conf /etc/fonts/local.conf
RUN fc-cache -f && libreoffice --version
WORKDIR /app
COPY app.py /app/app.py
USER 10001
ENV HOME=/home/converter PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
EXPOSE 8080
CMD ["gunicorn", "--bind=0.0.0.0:8080", "--workers=1", "--threads=2", "--timeout=65", "--graceful-timeout=5", "--limit-request-line=2048", "--limit-request-field_size=4096", "app:app"]
