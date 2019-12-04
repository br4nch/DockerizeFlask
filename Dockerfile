FROM python:3.6
RUN apt update
RUN export LC_ALL=C.UTF-8 && export LANG=C.UTF-8

EXPOSE 5000

WORKDIR /scalex

COPY requirements.txt /scalex
RUN pip install  -r requirements.txt

ADD . /scalex
CMD python3 main.py
