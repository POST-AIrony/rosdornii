FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app
COPY pyproject.toml poetry.lock /app/

RUN pip install poetry

RUN poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-ansi

EXPOSE 8000

COPY . /app/
CMD ["poetry", "run", "uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]