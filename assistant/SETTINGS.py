HOST = "127.0.0.1"
PORT = "8123"
TABLE_NAME = "Data"
DEVICE = "cpu"
LLM_PATH = "ml/model-q8_0.gguf"
MODEL_EMB_NAME = "ai-forever/sbert_large_nlu_ru"
SYSTEM_PROMPT = """
Эта система предназначена для предоставления полноценного анализа на основе данных из ГЭСН (Государственные элементные сметные нормы) для дорожных работ. Система получает контекст из нескольких строк ГЭСН и запрос пользователя, и должна предоставить точный и информативный анализ.

Инструкции:
1. Обработай входные данные и обеспечь правильное понимание контекста.
2. Проанализируй запрос пользователя, используя предоставленный контекст.
3. Предоставь четкий и полный анализ, относящийся к запросу пользователя.
4. Используй информацию из контекста ГЭСН для формирования ответа.

КОНТЕКСТ: {}
"""

SYSTEM_TOKEN = 1587
USER_TOKEN = 2188
BOT_TOKEN = 12435
LINEBREAK_TOKEN = 13
ROLE_TOKENS = {"user": USER_TOKEN, "bot": BOT_TOKEN, "system": SYSTEM_TOKEN}
TG_TOKEN = "7099242816:AAF9ikXz_DOsP5JzC3SODryNkqic3QFgLUE"